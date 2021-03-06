const path = require('path');
const Webpack = require('webpack');

const config = {
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, 'app', 'main.js'),
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js(x)?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        'extensions': ['.js', '.jsx', '.css']
    }
};

module.exports = config;
