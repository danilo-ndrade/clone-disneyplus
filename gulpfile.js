const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

/*função para transformar o arquivo scss em css*/
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

/*funcao para minimizar imagens*/
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}



/*exporta como default as funcoes styles e images paralelamente*/
exports.default = gulp.parallel(styles, images);
/*funcao para que observe quaisquer mundacas nos arquivos .scss na pasta src/styles, caso 
haja mudança executar funcao 'styles'*/
exports.watch = () => {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
};