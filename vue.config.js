const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/portifolio/' : '/',
	pluginOptions: {
		module: {
			rules: [
			  {
				test: /\.(png|PNG|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
				  name: '[path][name].[ext]',
				},
			  },
			],
		  },
	}
})
