var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var flatmap = require('gulp-flatmap');
var path = require('path');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var pump = require('pump');

function scriptsConcat() {
    return gulp.src([
            '../../src/websrc/3rdparty/js/jquery-1.12.4.min.js',
            '../../src/websrc/3rdparty/js/bootstrap-3.3.7.min.js',
            '../../src/websrc/3rdparty/js/footable-3.1.6.min.js',
            '../../src/websrc/js/esprfid.js'])
        .pipe(concat({
            path: 'app.js',
            stat: {
                mode: 0666
            }
        }))
        .pipe(gzip({
           append: true
        }))
        .pipe(gulp.dest('../../web-ui-data/js/'));
}

function stylesConcat() {
    return gulp.src(['../../src/websrc/3rdparty/css/bootstrap-3.3.7.min.css', '../../src/websrc/3rdparty/css/footable.bootstrap-3.1.6.min.css', '../../src/websrc/3rdparty/css/sidebar.css'])
        .pipe(concat({
            path: 'app.css',
            stat: {
                mode: 0666
            }
        }))
        .pipe(gzip({
            append: true
        }))
        .pipe(gulp.dest('../../web-ui-data/css/'));
}

function fontgz() {
	return gulp.src("../../src/websrc/3rdparty/fonts/*.*")
        .pipe(gzip({
            append: true
        }))
        .pipe(gulp.dest('../../web-ui-data/fonts/'));
}

function htmlsPrep() {
    return gulp.src('../../src/websrc/*.htm*')
        .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
        .pipe(gzip({
            append: true
        }))
        .pipe(gulp.dest('../../web-ui-data'));
}

async function runner() {
    const scriptTasks = gulp.series(scriptsConcat);
    const styleTasks = gulp.series(stylesConcat);
    const fontTasks = gulp.series(fontgz);
    const htmlTasks = gulp.series(htmlsPrep);
    const parallel = await gulp.parallel(scriptTasks, styleTasks, fontTasks, htmlTasks);
    return await parallel();
}

exports.default = runner;
