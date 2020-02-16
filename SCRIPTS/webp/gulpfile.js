var gulp = require('gulp');
var webp = require('gulp-webp');

function webp__func() {
	return gulp.src('img/*.*')
		.pipe(webp())
        .pipe(gulp.dest('webp'));
}

gulp.task('webp',webp__func);