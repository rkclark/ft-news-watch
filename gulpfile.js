const gulp = require('gulp');
const obt = require('origami-build-tools');
const rename = require("gulp-rename");
const del = require("del");
const runSequence = require('run-sequence');

gulp.task('build', function() {
	return obt.build(gulp, {
		js: './src/client/js/main.js',
		sass: './src/client/scss/main.scss',
		buildJs: 'bundle.js',
		buildCss: 'bundle.css',
		buildFolder: 'src/public'
	});
});

gulp.task('stopBabelrc', function(){
	gulp.src('.babelrc')
		.pipe(rename('.voidbabelrc'))
		.pipe(gulp.dest('./'));
	del(['./.babelrc']);
});

gulp.task('startBabelrc', function(){
	gulp.src('.voidbabelrc')
		.pipe(rename('.babelrc'))
		.pipe(gulp.dest('./'));;
	del(['./.voidbabelrc']);
});

gulp.task('verify', function() {
	return obt.verify(gulp);
});

gulp.task('watch', function() {
	gulp.watch('./client/**/*', ['build']);
});

gulp.task('default', function (callback) {
  runSequence('stopBabelrc', 'build', 'startBabelrc',
    callback
  );
});
