import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetUno(),
    /** https://unocss.dev/presets/wind */
    presetWind(),
    presetAttributify(),
  ],
})