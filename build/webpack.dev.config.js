const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackBar = require("webpackbar");
const path = require('path');
module.exports = webpackMerge(baseWebpackConfig,{
    // 指定构建环境  
    entry:["react-hot-loader/patch",'./src/index'],
    mode:"development",
    // 插件
    plugins:[
        new WebpackBar(
            {
                name:"gqz",
                color:"#0366d6"
            }
        ),
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), 
            template: 'index.html',
            inject: true,
            title:"react-app"
        })
    ],
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src"), // 在项目中使用@符号代替src路径，导入文件路径更方便
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: "eval-source-map",
    // 开发环境本地启动的服务配置
    module:{
        rules:utils.cssLoaders()
    },
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: "8086", // 指定段靠谱
        injectHot: true,
        inline: true,
        publicPath: "/", // 访问资源加前缀       
        proxy: {
            // 接口请求代理
            "/api": {
                target: "http://192.168.1.87:9000/",
                changeOrigin: true,
                pathRewrite: {//地址重写
                  '^/api': "/"
                }
            }, 
        },

    }
});