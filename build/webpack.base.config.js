const utils = require("./utils")
const path = require("path");
const Webpack = require("webpack");
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = {
    // 入口
    // ["react-hot-loader/patch",'./src/index']
    entry:'./src/index',
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: utils.assetsPath("js/[name].js") ,
        publicPath: "/" // 打包后的资源的访问路径前缀
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src"), // 在项目中使用@符号代替src路径，导入文件路径更方便
            // 'react-dom': '@hot-loader/react-dom'
        }
    },
    // 模块
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            // {
            //     test: /\.css$/,
            //     use:[
            //         {
            //             loader:MiniCssExtractPlugin.loader,
            //             options:{
            //                 hmr: utils.isDev(), // 开发的时候，修改css热更新，但是试了下不起作用
            //                 reloadAll:true,
            //             }
            //         },
            //         // {
            //         //     loader: 'style-loader', // 创建 <style></style>
            //         // },
            //         { 
            //             loader: 'css-loader',  // 转换css
            //         },
            //         {
            //             loader: 'postcss-loader'
            //         }
            //     ]
            // },
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader:MiniCssExtractPlugin.loader,
            //             options:{
            //                 hmr: utils.isDev(), // 开发的时候，修改less热更新但是试了下不起作用
            //                 reloadAll:true,
            //             }
            //         },
            //         // {
            //         //     loader: 'style-loader', 
            //         // },
            //         {
            //             loader: 'css-loader',
            //             options: { importLoaders: 1 }
            //         },
            //         {
            //             loader: 'postcss-loader'
            //         },
            //         {
            //             loader: 'less-loader', // 编译 Less -> CSS
            //             options:{
            //                       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
            //                              modifyVars:getThemeVariables(
            //                                 {
            //                                     dark: false, // 开启暗黑模式
            //                                     compact: true, // 开启紧凑模式
            //                                 }
            //                              ),
            //                              javascriptEnabled: true,
            //                        },
            //             },
                        
            //         },
            //     ],
            // },
            {
                test: /\.svg$/,
                // loader: 'svg-sprite-loader',
                // include:[utils.resolve('src/icons')],
                // options: {
                //     limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                //     name: 'static/icon/[name].[contenthash].[ext]',
                //     symbolId: 'icon-[name]'
                // }
                include:[utils.resolve('src/icons')],
                use: [
                    { loader: 'svg-sprite-loader', 
                        options: {
                                    
                                    // name: 'static/icons/[name].[contenthash].[ext]',
                                    symbolId: 'icon-[name]'
                        } 
                    }
                ]
                
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude:[utils.resolve('src/icons')],
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/imgs/[name].[contenthash].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[contenthash].[ext]'
                }
            }
        ]
    },
      //插件
    plugins:[
        new Webpack.DefinePlugin({
            'process.env': {
                APP_ENV:JSON.stringify(process.env.NODE_ENV)
            },
        }),
        new AntdDayjsWebpackPlugin()
    ],
}
