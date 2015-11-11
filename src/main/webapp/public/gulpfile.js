var gulp = require('gulp');
var clean = require('gulp-clean');

var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-concat-css': 'concatcss',
        'gulp-clean': 'clean'
    }
});

var paths = {
    app: ['js/app.js'],
    scripts: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/restangular/dist/restangular.min.js',
        'bower_components/lodash/lodash.min.js',
        'temp/app.min.js'
    ],
    styles: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'css/my.css'
    ],
    views: 'views',
    temp: 'temp',
    distDev: 'dev'
};

gulp.task('default', ['minify-app', 'concat-css']);
gulp.task('default2', ['concat-js', 'inject']);

gulp.task('minify-app', function () {
    gulp.src('js/app.js')
        .pipe(plugins.uglify())
        .pipe(plugins.rename('app.min.js'))
        .pipe(gulp.dest('temp'));
});

gulp.task('concat-css', function () {
    gulp.src(paths.styles)
        .pipe(plugins.concatcss("main.css"))
        .pipe(gulp.dest(paths.distDev));
});

gulp.task('concat-js', function () {
    gulp.src(paths.scripts)
        .pipe(plugins.concat('app.min.js'))
        .pipe(gulp.dest(paths.distDev));
});

gulp.task('inject', function () {
    gulp.src('views/loginPage.jsp')
        .pipe(plugins.inject(gulp.src(['dev/app.min.js', 'dev/main.css'], {read: false}), {addPrefix: 'public'}))
        .pipe(gulp.dest(paths.views));
});

gulp.task('clean', function () {
    return gulp.src(paths.temp, {read: false})
        .pipe(clean());
});

gulp.task('watch', function () {

    gulp.watch('js/app.js', ['minify-app']);
    gulp.watch(paths.styles, ['concat-css']);
    gulp.watch(paths.scripts, ['concat-js']);
});
