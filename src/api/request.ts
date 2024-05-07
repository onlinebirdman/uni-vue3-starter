import { BaseRequest } from './utils/BaseRequest'

export const BASE_URL = {
  development: 'https://hwtest2.cdollar.cn/dollar-test-huaxia-choose-fund/',
  production: 'https://hwtest2.cdollar.cn/dollar-test-huaxia-choose-fund/',
}[process.env.NODE_ENV]

export const fullURL = (url: string) => `${BASE_URL}${url}`

export class MyRequest<E, T> extends BaseRequest<E, T> {
  // 重写 httpClient
  private async fetch<T>(url: string, options?: HttpOptions): Promise<T> {
    const { data: res } = await uni.request({
      url: this.getUrl(),
      ...options,
    })
    if (res.errCode !== 'e0000') {
      console.warn('fetch error', res)
      this.showToast(res.errMessage)
      return Promise.reject(res)
    }
    return res.body
  }

  private showLoading() {
    uni.showLoading({
      title: '请稍候...',
    })
  }

  private closeLoading() {
    uni.hideLoading()
  }

  private showToast(msg: string) {
    uni.showToast({
      title: msg,
      icon: 'none',
    })
  }
}
