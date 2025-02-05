import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '使用说明',
    items: [
      { text: '示例', link: '/notes/demo/README.md' },
      { text: '获得强卡器', link: '/notes/install/README.md' },
      { text: '使用强卡器！', link: '/notes/start/README.md' },
      { text: '更新日志', link: '/notes/changelog/README.md' }
    ]
  },
])
