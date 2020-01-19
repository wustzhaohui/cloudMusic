/*
 * @Author: zhaohui
 * @Date: 2019-10-28 11:46:29
 * @LastEditTime : 2020-01-19 15:07:04
 * @LastEditors  : zhaohui
 * @Description: 
 * @FilePath: /cloudMusic/vue.config.js
 */
module.exports = {
    outputDir: 'dist',
    devServer: {
        host: '0.0.0.0',
        port: 8088,
        proxy: {
            '/': {
                target: 'https://musicserver.fullmastach.club/',
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
