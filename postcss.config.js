module.exports = {
  plugins: [
    // require('autoprefixer')({browsers:'ios >= 8'})

	  require('postcss-mixins')(),

	  //类似于sass语法的css变量定义

	  require('postcss-simple-vars')(),


	  //css媒体查询简写   https://github.com/postcss/postcss-media-minmax/blob/master/README-zh.md

	  require('postcss-media-minmax')(),

	  //css层级写法  https://github.com/postcss/postcss-nested

	  require('postcss-nested')(),

	  //css选择器简写

	  require('postcss-selector-matches')(),

	  require('postcss-selector-not')(),

	  //css浏览器兼容

	  require('autoprefixer')({ browsers: ['last 5 versions'] }),

	  //css计算

	  require("postcss-calc")
  ]
}

