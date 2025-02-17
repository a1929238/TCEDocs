import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'


export const guide = defineNoteConfig({
  dir: 'guide',
  link: '/guide/',
  sidebar: [
    {
      text: '与我签订契约',
      collapsed: false,
      icon: 'ri:magic-line',
      prefix: 'install',
      items: [
        '获取强卡器'
      ],
    },
    {
      text: '三分钟入门强卡器',
      collapsed: false,
      icon: 'hugeicons:start-up-01',
      prefix: 'start',
      items: [
        '进行个人设置',
        '进行强卡方案设置',
        '进行制卡方案设置',
        '开始强化吧！'
      ]
    },
    {
      text: '成为强卡器中级高手',
      collapsed: false,
      icon: 'game-icons:strong',
      prefix: 'advanced',
      items: [
        '快速强卡的奥秘',
        '孤心沙龙帮助你',
        '强卡方案门道多',
        '多卡强化省金币',
        '宝石管理很省心',
        '卡包配置真神奇',
        '统计数据有乐趣',
        '危险设置不容易'
      ]
    },
    {
      text: '遇到问题来找我',
      collapsed: false,
      icon: 'ic:baseline-help',
      prefix: 'troubleshooting',
      items: [
        '弹窗：没有香料了！',
        '多卡强化时找不到卡片'
      ]
    }
  ],
})

export const changelogNote = defineNoteConfig({
  dir: 'changelog',
  link: '/changelog',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [guide, changelogNote],
})
