const HTMLPlugin = require('html-webpack-plugin');



// Экспортируем обьект (nodejs)
module.exports = {
	// входная точка нашего приложения
	entry: ['@babel/polyfill', './src/index.js'],
	// куда складывать работу
	output: {
		path: __dirname + '/dist',
		// принято так называть совокупность скриптов и модулей
		filename: 'bundle.js' 
	},
	// конфигурируем сервер для разработки
	devServer: {
		contentBase: __dirname + '/dist'
	},
	// плагин для манипуляции html
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	// говорим вебпаку чтоб он понимал дж без указания расширения
	resolve: {
		extensions: ['.js']
	},
	// настройка babel
	module: {
	    rules: [
	      {
	        test: /\.m?js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['@babel/preset-env']
	          }
	        }
	      }
	    ]
	  }

}
// в вебкап есть два мода
// webpack --mode development
// webpack --mode production 


// for .babelrc
// {
// 	"presets": [
// 	  ["@babel/preset-env", {
// 	  "targets": [
// 	    "last 5 versions"
// 	  ]
// 	}]
// 	]
// }