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
      text: '开始使用',
      collapsed: false,
      icon: 'hugeicons:start-up-01',
      prefix: 'start',
      items: [
        '进行个人设置',
        '进行强卡方案设置',
        '进行制卡方案设置',
        '开始强化吧！'
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
