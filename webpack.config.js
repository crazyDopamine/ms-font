var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var fs = require("fs");
// var postcss = require("postcss");
// var postcssImport = require("postcss-import");
// var css = fs.readFileSync("app/css/style.css", "utf8");
// postcss().use(postcssImport()).process(css,{
//     from:'app/css/style.css'
// }).then(function(result){
//     console.log(result.css)
// });
module.exports = {
    entry: {
        // common:'./app/js/common/vueInit.js',
        index:'./app/js/page/index.js',
        about:'./app/js/page/about.js',
        business:'./app/js/page/business.js',
        recruit:'./app/js/page/recruit.js',
        notify:'./app/js/page/notify.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            // {test: /\.ts$/,loader: 'awesome-typescript-loader'},
            // {
            //     test:/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            //     loader:'file-loader'
            // },
            {test:/\.scss$/,loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader!sass-loader'})},
            {test:/\.css$/,loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})},
            {test:/\.vue$/,loader:'vue-loader'},
            {
                test: /\.((woff2?|svg|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    // 小于10KB的图片会自动转成dataUrl
                    'url?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"100",speed:4}}'
                ]
            },
        ],
        exprContextCritical: false,
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/app/js/lib',
                to: 'lib'
            },
            {
                from: __dirname + '/app/img',
                to: 'img'
            },
            {
                from: __dirname + '/app/js/common/g_config.js',
                to: 'g_config.js'
            },
            {
                from: __dirname + '/node_modules/font-awesome',
                to: 'font-awesome'
            },
            {
                from: __dirname + '/node_modules/iview/dist/',
                to: 'lib/iview'
            }
        ]),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings: false
        //     }
        // })
    ],
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
        extensions: ['.js','sass','scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js',
            'services$':'app/js/common/services.js'
        }
    },
    // 配置 webpack-dev-server
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8085 // 修改端口，一般默认是8080
    }
};