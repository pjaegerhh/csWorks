const path = require('path')
const webpack = require('webpack')

const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'cheap-module-source-map', //siehe Stackoverflow https://stackoverflow.com/questions/48047150/chrome-extension-compiled-by-webpack-throws-unsafe-eval-error
//    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'frontend/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        assetModuleFilename: 'images/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false
                }
            },
            {
                test: /\.svg/,
                type: 'asset/resource'
              },{
                test: /\.css/,
                type: 'asset/resource'
              },
              {
                test: /\.png/,
                type: 'asset/resource'
              },
              {
                test: /\.(ssvg|pong|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
              }

        ]
    },  
    plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.ProvidePlugin({"React": "react", }),  // ggfls muss das auch in die deployment variante 
    ],
    
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    }
}

/*
            {
                test: /\.svg/,
                type: 'asset/inline'
              },
              {
                test: /\.png/,
                type: 'asset/resource'
              },
              {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
*/





console.log('Config test=',config.module.rules)
//export default config
module.exports = config
//         assetModuleFilename: 'static/[hash][ext][query]'


//                 test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
/*
,
            {
                test: /\.(ttf|eot|svg|gif|jpg)(\?[\s\S]+)?$/,
                type: 'asset/resource',
            }
            */
/*resolve: {
    fullySpecified: false
  }*/
/*
            {
                test: /\.svg/,
                type: 'asset/inline'
              },
              {
                test: /\.png/,
                type: 'asset/resource'
              },
*/

