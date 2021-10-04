const path = require('path')
const webpack = require('webpack')

const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'frontend/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/",
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


//export default config
module.exports = config
