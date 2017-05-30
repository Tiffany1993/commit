var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var scss = require('gulp-scss');
var minifycss = require('gulp-minify-css');
var server = require('gulp-webserver');


//合并
gulp.task('concat',function(){
	gulp.src(['js/one.js','js/two.js']).pipe(concat('together.js')).pipe(gulp.dest('./dist'))
})

//压缩js
gulp.task('uglify',function(){
	gulp.src('dist/together.js').pipe(uglify()).pipe(gulp.dest('./after'))
})
//编译css
gulp.task('scss',function(){
	gulp.src('css/style.scss').pipe(scss()).pipe(gulp.dest('./after'))
})

//压缩css
gulp.task('minifycss',function(){
	gulp.src('after/style.css').pipe(scss()).pipe(gulp.dest('./dist'))
})

//自动打开
gulp.task('server',function(){
	gulp.src('./')
		.pipe(server({
		open:true,
		livereload:true,
		directoryListing:true
	}))
})