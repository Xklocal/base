import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
// import vueDevTools from 'vite-plugin-vue-devtools'  TODO这个是会有一个vue的东西在整体的下面

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //这个是在标签上写样式
    UnoCSS(),
    //这是一个 Vite 插件，用于按需导入组件库的样式文件。它能根据所使用的组件，自动引入相应的样式，而不是引入整个库的样式文件，从而优化打包体积和加载速度。
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            //在打包或者构建的时候执行 会在下面终端打印
            // console.log(name, 'name')
            return `element-plus/es/components/${name.substring(3)}/style/css`
          },
        },
      ],
    }),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
