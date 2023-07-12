const CracoLessPlugin = require('craco-less');
const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'src': path.resolve(__dirname, 'src'),
            'utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};