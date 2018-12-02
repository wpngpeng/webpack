const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 导出一个node模块，供webpack去调用，导出是一个对象，该对象设置webpack运行过程中一些配置参数
module.exports = {

    // 应用的入口文件，webpack会分析这个入口文件中导入的其他文件，并进行处理，最后进行打包
    //entry: './src/index.js',

    entry: {
        // rawLoader: './src/rawLoader.js',
        // jsonLoader: './src/jsonLoader.js',
        // fileLoader: './src/fileLoader.js',
        // babelLoader: './src/babelLoader.js',
        // cssLoader: './src/cssLoader.js',
        // vueIndexLoader: './src/vue.index.js',
        // jqueryLoader: './src/jqueryLoader.js'
        commonLoader1: './src/commonLoader1.js',
        commonLoader2: './src/commonLoader2.js'
    },

    // 设置打包后的文件输出的配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    // 配置loader
    module: {
        rules: [
            // 每一个规则就是一个对象
            {
                // 当加载的是该类型的文件
                test: /\.txt$/,
                // 使用什么loader去处理该文件
                use: 'raw-loader'
            },
            {
                // 当加载的是该类型的文件
                test: /\.json$/,
                // 使用什么loader去处理该文件
                use: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'miaov_[hash].[ext]',
                            publicPath: '/public/'
                        }
                    }
                ]
            },

            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                test: /\.css$/,
                // 使用两个loader去处理.css文件
                // 处理顺序是倒序的
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
            },

            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        // new UglifyJSPlugin(),
        // new ExtractTextPlugin("styles.css"),

        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'verdor'
        // })

]

};