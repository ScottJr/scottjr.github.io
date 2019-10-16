const config        = require('./config');
const sass          = require('gulp-sass');
const { watch, src, dest } = require('gulp');

const styleCompile = () => {
  return src('_sass/styles.scss')
    .pipe(sass())
    .pipe(dest('assets/css'));
}

const style = (cb) => {
  styleCompile();
  cb();
}

exports.default = () => {
  watch('_sass/**/*.scss', style);
}
