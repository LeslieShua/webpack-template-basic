// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export 
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {   //규칙 설정
    rules: [
      {       // scss를 추가할 수 있게하는 부분
        test: /\.s?css$/,
        use: [
          'style-loader', // install style-loader --save
          'css-loader',  //npm install css-loader -D
          'postcss-loader', //npm i -D postcss autoprefixer postcss-loader  //ie 지원
          'sass-loader' //npm i -D sass-loader sass
          
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'  // npm i -D babel-loader
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ]
}