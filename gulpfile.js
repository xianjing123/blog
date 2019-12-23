var gulp = require("gulp")

function copyIndex() {
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist'))
}
gulp.task('copy-index', copyIndex)

function lib() {
    return gulp.src('.src/lib/*.*').pipe(gulp.dest('./dist/lib'))
}
gulp.task('copy-lib', lib)

function js() {
    return gulp.src('./src/script/**/*.js')
        .pipe(gulp.dest('./dist/script'))
}
gulp.task('js', js)

function copyHtml() {
    return gulp.src('./src/html/*.html').pipe(gulp.dest('./dist/html'))
}
gulp.task('copy-html', copyHtml)

function copyImg() {
    return gulp.src('./src/resource/imgs/*.{jpeg,jpg,gif,png}').pipe(gulp.dest('./dist/resource/imgs'))
}
gulp.task('copy-img',copyImg)

var copyAll = gulp.parallel(copyIndex, copyHtml, js, lib, copyImg)
gulp.task('copy-all', copyAll);