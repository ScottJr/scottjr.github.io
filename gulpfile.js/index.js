const config        = require('./config');
const sass          = require('gulp-sass');
const { src, dest } = require('gulp');

exports.default = function() {
  return src('_scripts/*.js')
    .pipe(dest('assets/'));
}