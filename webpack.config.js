const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de la aplicación
    output:{
        filename: 'bundle.js',//nombre del archivo de salida
        path: path.resolve(__dirname,'dist'), //carpeta de salida
           },
module:{
    rules:[
        {
      test:/\.css$/ , // regex para identificar archivos css
      use: ['style-loader', 'css-loader'], //loaders para procesar archivos css
        },
    {
        test:/\.js$/ , // regex para identificar archivos js
        exclude:/node_modules/, //Excluir lla carpeta node_modules
        use: {
            loader: 'babel-loader',//loader para convertir js moderno al js compatible a más navegadores
            options:{
                presents:['@babel/present-env'],
                    },
             },
    },
          ],
        },
devtool:'source-map', //Genera source maps para facilitar la depuración
devServer:{
    contentBase:path.resolver(__dirname,'dist'),//Carpeta ddel que correrá el servidor 
    compress:true,//Habilitar compresión gzip
    port:9000,//Puerto del servidor de desarrollo
},
                  };
