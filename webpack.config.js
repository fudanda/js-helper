const path = require('path')
module.exports = {
    mode: "production",
    entry: './index.js',
    // 输出配置
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'fudanda.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
