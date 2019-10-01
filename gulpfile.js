const { src, dest, parallel } = require('gulp')
const htmlmin = require('gulp-htmlmin');
const inline = require('gulp-inline')
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css');

function copyManifest() {
    return src('./manifest.json')
        .pipe(dest('dist/'))
}

function copyIcons() {
    return src('./icons/*.png')
        .pipe(dest('dist/icons/'))
}

function bundle() {
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

exports.default = parallel(copyIcons, copyManifest, bundle);