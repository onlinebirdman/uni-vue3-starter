import { defineStore } from 'pinia'
/**
 * 前后端接口请求的中间层，通过这一层与后端接口通讯
 * T: 响应体类型
 * E: 请求体类型
 */
export class BaseRequest<E, T> {
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  private url: string
  private options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  public get store(): T {
    return this.useResponseStore().value
  }

  constructor(url: string, method?: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET') {
    this.url = url
    this.method = method
    this.options.method = method

    this.useResponseStore = defineStore(`${method}:${url}`, () => {
      const value = useSessionStorage<T>(`${method}:${url}`)
      const setValue = (newValue: T) => {
        value.value = newValue
      }
      return {
        value,
        setValue,
      }
    })
  }

  public async request(payload?: E, options?: any): Promise<T> {
    this.payloadAnalysis(payload)
    if (!options?.hideLoading)
      this.showLoading()

    try {
      if (options?.download) {
        // 根据url和params生成带query的url
        const url = `${this.getUrl()}?${new URLSearchParams(payload).toString()}`
        const a = document.createElement('a')
        a.href = url
        a.download = options.download
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
      else {
        const res = await this.fetch<T>(
          this.url,
          this.options,
        )
        const store = this.useResponseStore()
        store.setValue(res)
        return res
      }
    }
    catch (error) {
      console.warn('request error:', error)
      return new Promise((resolve) => {
        options?.onError?.(error, resolve)
      })
    }
    finally {
      if (!options?.hideLoading)
        this.closeLoading()
    }
  }

  private async fetch(url: string, options: any): Promise<any> {
    // 使用原生fetch发起请求
    if (typeof options.body === 'object')
      options.body = JSON.stringify(options.body)

    const res = await window.fetch(url, options)

    const data = await res.json()
    // console.log('data', data)
    return data
  }

  private payloadAnalysis(payload: E) {
    if (this.method === 'POST' || this.method === 'PUT')
      this.options.body = payload
    else
      this.options.params = payload
  }

  private getUrl() {
    return this.url
  }

  private showLoading() {
    console.warn('loading...')
  }

  private closeLoading() {
  }
}
