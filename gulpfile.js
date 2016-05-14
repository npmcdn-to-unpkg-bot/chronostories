var gulp = require('gulp');
var assetsDev = 'assets/';
var assetsProd = 'public/';

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

// Other
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
    return gulp.src([assetsDev + 'scss/*.scss', assetsDev + 'scss/**/*.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts', function () {
    return gulp.src(assetsDev + 'app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        // .pipe(jsuglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(assetsProd + 'js/app/'));  
});


gulp.task('build-img', function () {
    return gulp.src(assetsDev + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('watch', function () {
    gulp.watch(assetsDev + 'app/**/*.ts', ['build-ts']);
    gulp.watch([assetsDev + 'scss/*.scss', assetsDev + 'scss/**/*.scss'], ['build-css']);
    gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('default', ['watch', 'build-ts', 'build-css', 'build-img']);