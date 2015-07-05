var gulp = require('gulp');
var serve = require('gulp-serve');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('serve', serve('public'));


gulp.task("bower-files", function () {
    return gulp.src(mainBowerFiles({
        "overrides": {
            "bootstrap": {
                "main": "dist/js/bootstrap.js"
            }
        }
    }))
        .pipe(concat('bower-components.js'))
        .pipe(gulp.dest('./public/app/built'))
});