import webpack from 'webpack';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import postcssUnits from 'postcss-units';
import cssnano from 'cssnano';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                postcssUnits({
                                    precision: 4,
                                }),
                                cssnano(),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff2?)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
    ],
};

export default config;