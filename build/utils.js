const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { getThemeVariables } = require('antd/dist/theme');
function cssLoaders (options){
    options = options || {};
    const cssLoader = { 
        loader: 'css-loader',  // 转换css
        options:{
            sourceMap: options.sourceMap
        }
    };

    function generateLoaders(loader,loaderOptions){
        const loaders = [cssLoader,'postcss-loader'];
        if(loader){
            loaders.push({
                loader: loader+"-loader",
                options:Object.assign({},loaderOptions , {
                    sourceMap: options.sourceMap
                })
            })
        }
        if(options.extract){
            return [
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        hmr: false,  // 开发环境热更新 ，然而不起作用
                        reloadAll:true,
                    }
                }
            ].concat(loaders);
        }else{
           return ['style-loader'].concat(loaders)
        }
    }
    var option ={
                    lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                            modifyVars:getThemeVariables(
                            {
                                dark: false, // 开启暗黑模式
                                compact: true, // 开启紧凑模式
                            }
                            ),
                            javascriptEnabled: true,
                    }
                }
    const object = {
        css: generateLoaders(),
        less: generateLoaders("less",option)
    }
    const output = [];
    for(let key in object){
        const loader = object[key];
        output.push({
            test:new RegExp('\\.' + key + '$'),
            use:loader
        })
    }
    return output;
}

  
exports.isDev = function (){
    return process.env.NODE_ENV === 'development';
}

exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}

exports.assetsPath = function (_path) {
    return path.posix.join("static", _path)
}

exports.cssLoaders = cssLoaders;
