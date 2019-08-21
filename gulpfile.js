const { src, dest } = require('gulp');

exports.default = function() {

  return src('_scripts/*.js')
    .pipe(dest('_site/assets/scripts'));
}