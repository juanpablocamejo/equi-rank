const { src, dest } = require('gulp')
var inline = require('gulp-inline')
var uglify = require('gulp-uglify-es').default
let cleanCSS = require('gulp-clean-css');

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
        .pipe(dest('dist/'))
}