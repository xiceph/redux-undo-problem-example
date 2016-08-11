var webpack = require('webpack');

var DefinePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify('true')
});


module.exports = {
    entry: [
			'./src/js/root.js',
			'webpack-dev-server/client?http://localhost:8088',
			'webpack/hot/only-dev-server'
		],
    output: {
        publicPath: '',
        filename: 'build/bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        preLoaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel'
                ]
            }
        ]
    },
		plugins: [
				DefinePlugin
		]
};
