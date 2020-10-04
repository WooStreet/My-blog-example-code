module.exports = {
	target: 'node',
	entry: {
		buttonClick: './src/JavaScript/button/click.js'
	},
	output: {
		filename: '[name].js',
		path: `${__dirname}/public/JavaScript`
	},
	 devServer: {
			contentBase: `${__dirname}/public`,
	},
};