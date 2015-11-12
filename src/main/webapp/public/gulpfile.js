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
    views: 'views',
    temp: 'temp',
    distDev: 'dev'
};

gulp.task('default', ['concat-css','concat-js-dev', 'inject-dev']);
//gulp.task('default2', ['concat-js-dev', 'inject-dev']);

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

gulp.task('compile', function () {
    gulp.src(['js/ts/all.ts'])
        .pipe(plugins.tsc())
        //.pipe(plugins.uglify())
        .pipe(plugins.rename('app.min.js'))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('concat-js-dev', function () {
    gulp.src(paths.scripts)
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.distDev));
});

gulp.task('inject-dev', function () {
    gulp.src('views/loginPage.jsp')
        .pipe(plugins.inject(gulp.src(['dev/app.js', 'dev/main.css'], {read: false}), {addPrefix: 'public'}))
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


