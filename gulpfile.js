const gulp = require('gulp');
const obt = require('origami-build-tools');
const rename = require("gulp-rename");
const del = require("del");
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');

//Development Tasks

gulp.task('build:dev', function() {
	return obt.build(gulp, {
		js: './src/client/js/main.js',
		sass: './src/client/scss/main.scss',
		buildJs: 'bundle.js',
		buildCss: 'bundle.css',
		buildFolder: 'src/public'
	});
});

gulp.task('minify', function(){
  return gulp.src('src/public/bundle*')
    //Minify js files
    .pipe(gulpIf('*.js', uglify()))
    //Minify css files
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('src/public'));
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
  runSequence('stopBabelrc', 'build:dev', 'minify', 'startBabelrc',
    callback
  );
});

//Production Tasks

//Clean out dist folder for use before building
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('build:prod', function(){
  return gulp.src(['src/**/*', '!src/client'])
		//Transpile js
		.pipe(gulpIf('*.js', babel({
            presets: ['es2015']
        })))
    .pipe(gulp.dest('dist'));
});

gulp.task('create:dist', function (callback) {
  runSequence('clean:dist', 'build:prod',
    callback
  );
});
