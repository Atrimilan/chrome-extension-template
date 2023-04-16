const path = require('path');
const Webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development",
    entry: {
        'popup/popup': './src/popup/popup.js',
        'background/background': './src/background/background.js',
        'content-scripts/contentScript': './src/content-scripts/contentScript.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'   // sass-loader must be after css-loader
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: false })
    ],
    devtool: false
};
