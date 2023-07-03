// //crear una primer tarea con gulp.las tareas son funciones

// function tarea(done){
//     console.log('mi primer tarea');
//     done();
// }
// //finaliza la tarea

// //llamar a la tarea 

// exports.tarea=tarea;

/*importar los modulos*/

const {src,dest,watch,series,parallel} = require('gulp');

//css y sass

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// compilar sass con gulp

function css(done){
    //identificar el archivo
    src('src/scss/app.scss')

    //compilar el archivo
    .pipe(sass({outputstyle: 'compressed'}))// outputstyle:'compressed' o 'expanded'
    .pipe(postcss( [autoprefixer]))//crear versiones compatibles con navegadores que no soporten la nueva sintaxis

    //guardar archivo
    .pipe(dest('build/css'))

    done();
}

function dev(){
    watch('src/scss/**/*.scss', css) // comodin
}

exports.css = css;
exports.dev = dev;

//apreto ctrl y c






