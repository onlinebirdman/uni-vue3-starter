import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // pnpm add @unocss/eslint-plugin -D
    unocss: true,
    typescript: true,
    // pnpm add eslint-plugin-format -D
    formatters: true,
  },
)
