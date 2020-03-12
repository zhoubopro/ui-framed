module.exports = {
  base: '/ui-framed/',
  title: 'ui-framed一个Vue的UI框架',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button'
        ]
      },
    ]
  },
  // scss:{
  //   includePaths: [path.join(__dirname, 'src/styles')]
  // },
  // markdown: {
  //   lineNumbers: true
  // }
}
