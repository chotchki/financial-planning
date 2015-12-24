var gulp = require('gulp'),
    bower = require('gulp-bower'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')
    sourcemaps = require('gulp-sourcemaps');

var config = {
    appDir: './app',
    sassPath: './app/scss/*.scss',
    bowerDir: './bower_components'
};

var reload = browserSync.reload;

//Get all the deps if we don't have them already
gulp.task('bower', function(){
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

//Install all of the fontawesome icons
gulp.task('icons', function(){
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest(config.appDir + '/fonts'));
});

gulp.task('sass', function(){
    return gulp.src(config.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                config.bowerDir + '/font-awesome/scss'
            ],
            precision: 8
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.appDir + '/styles'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './app'
        },
        files: ['./app/*.html', './app/js/*.js', './app/styles/*.css'],
        reloadOnRestart: true
    });
});

gulp.task('default', ['bower', 'icons', 'sass', 'browser-sync'], function() {
    gulp.watch(['scss/*.scss'], {cwd: 'app'}, ['sass']);

});
