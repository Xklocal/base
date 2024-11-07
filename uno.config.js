// uno.config.js
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 加载基础预设
    presetAttributify(), // 启用属性化模式
    presetIcons({
      /* 自定义图标配置 */
    }), // 启用图标支持
  ],
  rules: [
    // 自定义规则
    ['custom-rule', { color: 'red' }],
  ],
  shortcuts: {
    // 定义快捷类
    btn: 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
  },
  theme: {
    // 自定义主题
    colors: {
      primary: '#1da1f2',
      secondary: '#14171a',
    },
  },
})
