
module.exports = {
    port: 8999,
    proxy: {
        '/user': {
            target: 'http://192.168.4.124:9900',
            changeOrigin: true,
            pathRewrite: {
                '^/user': '/user'
            }
        },
        '/profile': {
            target: 'http://192.168.4.124:9900',
            changeOrigin: true,
            pathRewrite: {
                '^/profile': '/profile'
            }
        },
        '/config': {
            target: 'http://192.168.4.124:9900',
            changeOrigin: true,
            pathRewrite: {
                '^/config': '/config'
            }
        },
        '/wpk': {
            target: 'http://admin.weplaykit.com',
            changeOrigin: true,
            pathRewrite: {
                '^/wpk': '/wpk'
            }
        }
    },
    clientLogLevel: "error"
};

