const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const concat = require("gulp-concat");//合并js
const uglify = require("gulp-uglify");//压缩js
const rename = require("gulp-rename");//重命名
const cleanCss = require("gulp-clean-css");//压缩css
const babel = require("gulp-babel");//转js版本
const gutil = require("gulp-util");

gulp.task('sass',function(){
	gulp.src('scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./css'));
});
gulp.task("images",function(){
	gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/imgs"));
});
gulp.task("html",function(){
	gulp.src("html/*.html").pipe(gulp.dest("dist/html"));
});
gulp.task("indexhtml",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"));
});
gulp.task("css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("dist/css"))
	// .pipe(uglify())
	// .on('error', function(err) {
	//                 gutil.log(gutil.colors.red('[Error]'), err.toString());
	//             })
	// .pipe(rename({
	// 	suffix: ".min",
	// 	extname: ".css"
	// }))
	// .pipe(gulp.dest("dist/css"));
});
// gulp.task("sass",function(){
// 	gulp.src("scss/*.scss")
// 	.pipe(sourcemaps.init())
// 	.pipe(sass())
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest("dist/css"))
// 	.pipe(uglify())
// 	.on('error', function(err) {
// 	                gutil.log(gutil.colors.red('[Error]'), err.toString());
// 	            })
// 	.pipe(rename({
// 		suffix: ".min",
// 		extname: ".css"
// 	}))
// 	.pipe(gulp.dest("dist/css"));
// });

gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename({
		suffix: ".min",
		extname: ".js"
	})) 
	.pipe(gulp.dest("dist/js"));
});
gulp.task('watch',function(){
	gulp.watch('scss/*.scss',['sass']);
})