// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/fontend/',
    items: [
      {
        text: 'javascript',
        link: '/javascript/eventbus/'
      },
      {
        text: 'typescript',
        link: '/typescript/utility/'
      },
      {
        text: 'vue',
        link: '/vue/watermark/'
      },
      {
        text: 'react',
        link: '/react/zujian/'
      }
    ]
  },
  {
    text: '前端工程化',
    link: '/engineer/',
    items: [
      {
        text: 'babel',
        link: '/babel/base/'
      }
    ]
  },
  {
    text: '服务端',
    link: '/backend/',
    items: [
      {
        text: 'nginx',
        link: '/nginx/base/'
      }
    ]
  }
]
