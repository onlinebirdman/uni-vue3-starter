import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'
import image2css from 'vite-plugin-image2css'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni.default(),
    unocss(),
    // image2css({
    //   dir: './src/assets/imgs', // 图片存放的目录
    //   cdn: {
    //     enable: process.env.NODE_ENV === 'production', // 是否开启cdn
    //   },
    // }),
  ],
})
