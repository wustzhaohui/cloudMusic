module.exports = {
    outputDir: 'dist',
    devServer: {
        host: '0.0.0.0',
        port: 8088,
        proxy: {
            '/api': {
                target: 'http://saas.test.mei1.info',
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
