const config        = require('./config');
const sass          = require('gulp-sass');
const { series, src, dest } = require('gulp');

const compileVendor = () => {
  return src('./_sass/vendor/*.scss')
    .pipe(sass())
    .pipe(dest('assets/vendor'));
}

exports.default = series(compileVendor);