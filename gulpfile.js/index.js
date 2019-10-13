const config        = require('./config');
const sass          = require('gulp-sass');
const { series, src, dest } = require('gulp');

const styles = () => {
  return src('./_sass/styles.scss')
    .pipe(sass())
    .pipe(dest('assets/css'));
}

exports.default = series(styles);