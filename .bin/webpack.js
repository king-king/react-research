/**
 * Created by wangqun6 on 2017/5/15.
 */
let webpack = require("webpack");
let path = require("path");

const bundle = webpack({
    entry: [
        "../test/webpack/index.js"
    ],
    output: {
        path: path.resolve("../test/webpack/"), // string
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 这里的顺序很重要
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});

bundle.run(function () {

});