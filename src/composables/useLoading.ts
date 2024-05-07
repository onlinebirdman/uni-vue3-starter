const fullscreenLoading = ref(false)
let loading
export default () => {
  function showLoading(text = 'Loading...') {
    loading = ElLoading.service({
      lock: true,
      text,
      background: 'rgba(0, 0, 0, 0.7)',
    })
    loading.setText(text)
    fullscreenLoading.value = true
  }
  function closeLoading() {
    loading.close()
  }
  return {
    showLoading,
    closeLoading,
  }
}
