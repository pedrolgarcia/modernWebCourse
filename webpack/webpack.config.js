const modoDev = process.env.NODE_ENV !== 'production'; // verifica se a variável de ambiente está como produção
                                                       // foi setado na hora de fazer o build, usamos cross-env para setar quando usamos npm run build
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // minifica o js do build, não necessário pois o webpack ja minifica por padrão 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minifica css

module.exports = {
    mode: modoDev ? 'development' : 'production', // modo do build, production já otimiza o arquivo
    entry: './src/principal.js', // arquivo de entrada
    output: { // arquivo de saída, padrão é dist/main.js
        filename: 'principal.js', // nome do arquivo
        path: __dirname + '/public' // diretório
    }, // saída: public/principal.js
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({  // plugin para externalizar o arquivo css final, não joga no js
            filename: 'estilo.css'
        })
    ],
    module: { // carregando os loaders
        rules: [{ // regra - especificando os arquivos
            test: /\.s?[ac]ss$/, // expressão regular, pega todos os arquivos terminam com .s(opcional) + a ou c + ss
            use: [ // especificando os loaders que serão usados
                MiniCssExtractPlugin.loader,
                // 'style-loader', // adiciona css a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader' // loader do sass
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}