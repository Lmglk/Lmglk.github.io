import webpack from 'webpack';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import cssnano from 'cssnano';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[fullhash].js',
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
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [cssnano()],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.woff2$/,
                type: 'asset/resource',
            },
            {
                test: /\.md$/,
                type: 'asset/source',
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
