const CracoLessPlugin = require('craco-less');
const path = require('path');
module.exports = {
    style: {
        postcss: {
            mode: 'extends',
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        ['postcss-pxtorem', {
                            rootValue: 375 / 10,
                            propList: ['*']
                        }],
                    ],
                },
            },
        },
    },
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
        }
    ],
};