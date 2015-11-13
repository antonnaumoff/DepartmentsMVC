var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-concat-css': 'concatcss',
        'gulp-clean': 'clean'
    }
});

var paths = {
    app: ['js/app.js'],
    scripts: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/lodash/lodash.js',
        'temp/app.js'
    ],
    styles: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'css/my.css'
    ],
    ts: [
        'js/ts/*.ts', 'js/ts/app/*.ts', 'js/ts/app/*/*.ts'
    ],
    views: 'views',
    temp: 'temp',
    distDev: 'dev'
};

//plugins.run('npm run compile').exec();

gulp.task('compile', function () {
    return gulp.src(paths.ts)
        .pipe(sourcemaps.init())
        .pipe(ts({
            out: 'app.js'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.temp));
});

gulp.task('concat-css', ['compile'], function () {
    gulp.src(paths.styles)
        .pipe(plugins.concatcss("main.css"))
        .pipe(gulp.dest(paths.distDev));
});


gulp.task('concat-js-dev', ['concat-css'], function () {
    gulp.src(paths.scripts)
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.distDev));
});

gulp.task('inject-dev', ['concat-js-dev'], function () {
    gulp.src('views/loginPage.jsp')
        .pipe(plugins.inject(gulp.src(['dev/app.js', 'dev/main.css'], {read: false}), {addPrefix: 'public'}))
        .pipe(gulp.dest(paths.views));
});

gulp.task('clean', function () {
    return gulp.src(paths.temp, {read: false})
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch(paths.ts, ['inject-dev']);
    gulp.watch(paths.styles, ['concat-css']);
    gulp.watch(paths.scripts, ['concat-js-dev']);
});





