import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "dwy's blog",
  description: "学习笔记",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/quick-start/quick-start' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'Markdown Examples', link: '/fronted-end/markdown-examples' },
          { text: 'Runtime API Examples', link: '/fronted-end/api-examples' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Markdown Examples', link: '/back-end/markdown-examples' },
          { text: 'Runtime API Examples', link: '/back-end/api-examples' }
        ]
      },
      {
        text: 'AI 探索',
        items: [
          { text: 'Markdown Examples', link: '/ai/markdown-examples' },
          { text: 'Runtime API Examples', link: '/ai/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AutumnLeaf1201/blog' }
    ]
  }
})
