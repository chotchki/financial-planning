var gulp = require('gulp'),
    bower = require('gulp-bower'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var config = {
    appDir: './app',
    bowerDir: './bower_components',
    sassPath: './app/scss/*.scss'
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

gulp.task('javascript', function(){
    var b = browserify({
        entries: './'
    });
})

gulp.task('sass', function(){
    return gulp.src(config.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                config.bowerDir + '/font-awesome/scss',
                config.bowerDir
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
        files: ['./app/*.html', './app/**/*.html', './app/**/*.js', './app/styles/*.css'],
        reloadOnRestart: true
    });
});

gulp.task('default', ['bower', 'icons', 'sass', 'browser-sync'], function() {
    gulp.watch(['scss/*.scss'], {cwd: 'app'}, ['sass']);

});
