import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '使用说明',
    items: [
      { text: '获取强卡器', link: '/notes/guide/install/获取强卡器.md' },
      { text: '使用强卡器！', link: '/notes/guide/start/进行个人设置.md' },
      { text: '更新日志', link: '/notes/changelog/更新日志.md' }
    ]
  },
])
