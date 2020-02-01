module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // 视窗的宽度
      viewportWidth: 375,
      // 视窗的高度
      viewportHeight: 667,
      // 指定`px`转换为视窗单位值的小数位数
      unitPrecision: 5,
      // 指定需要转换成的视窗单位
      viewportUnit: 'vw',
      // 指定不需要转换的类
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
      //最小转化单位
      minPixelValue: 1,
      // 是否在媒体查询中转换`px`
      mediaQuery: false ,
      //exclude 排除指定文件夹 要求使用正则
      exclude: [/TabBar/]
    },
  }
}
