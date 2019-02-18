const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use('/manage', proxy({target: 'http://47.96.144.97:23362/', changeOrigin: true}));
    app.use('/manage', proxy({target: 'http://192.168.124.25:8082/', changeOrigin: true}));
};