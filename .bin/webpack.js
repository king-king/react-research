/**
 * Created by wangqun6 on 2017/5/15.
 */
let webpack = require("webpack");
let path = require("path");
console.log(__dirname);

webpack({
    entry: "../test/webpack/index.js",
    output: {
        path: path.resolve("../test/webpack/"), // string
        filename: "bundle.js"
    }
}, function (err, stats) {
    err ? console.log(err) : console.log(stats)
});