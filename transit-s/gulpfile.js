var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');


//less
function less__compile() {
	return gulp.src('less/*.less')
		.pipe(less())
		.pipe(prefix({
            browsers: ['>0.1%']
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());;

}

//jade
function jade__compile() {
	return gulp.src('jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
}

//Вотчер
function watch() {
	less__compile();
	jade__compile();

	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch('js/*.js').on('change', browserSync.reload);
	//gulp.watch('img/**/*').on('change', browserSync.reload);
	gulp.watch('img/**/*',browserSync.reload);
    gulp.watch('less/*.less', less__compile);
    gulp.watch('jade/**/*.jade', jade__compile).on('change', browserSync.reload);

}

gulp.task('jade',jade__compile);
gulp.task('watch',watch);