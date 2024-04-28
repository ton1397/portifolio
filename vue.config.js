const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
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
