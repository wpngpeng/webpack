module.exports = {
    entry: [
        './index.js',
        './node_modules/webpack-dev-server/client/index.js?http://localhost:8080/'],

    output: {
        filename: 'bundle.js'
    }
};