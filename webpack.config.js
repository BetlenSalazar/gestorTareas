const path = require('path');

module.exports = {
  entry: './src/index.js', // punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirame, 'dist'), // carpeta de salida
},
module: {
    rules: [
        {
            test: /\.css$/, // Regex para identificar archivos css
            use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
        },
        {
            test: /\.js$/, // Regex para identificar archivos JS
            exclude: /node_modules/, // Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', // Loader para transpilar JS moderno a JS compatible con más navegadores
                options: {
                    presets: ['@babel/preset-env'], // preset de babel para convertir JS moderno a versiones más antiguas
                }
            }
        }
    ]
},
devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde donde obtenemos los archivos que mostramos al usuario
        compress: true, // Habilitando compresión gzip
        port: 9000, // Puerto del servidor de desarrollo
    }
}