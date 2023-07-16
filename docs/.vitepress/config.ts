import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "首页",
  description: "123",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '卡尔曼滤波',
        items: [
          { text: '不变卡尔曼滤波总结', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'test', link: '/a' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/antizoos' }
    ]
  }
})
