const { src, dest } = require('gulp')
const htmlmin = require('gulp-htmlmin');
const inline = require('gulp-inline')
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css');

exports.default = function () {
    return src('index.html')        
        .pipe(inline({
            base: '.',
            css: cleanCSS,
            js: function () {
                return uglify({
                    mangle: false
                })
            }
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist/'))
}