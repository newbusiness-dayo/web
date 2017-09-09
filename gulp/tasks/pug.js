import gulp from 'gulp';
import pug from 'gulp-pug';
import beautify from 'gulp-jsbeautifier';
import { pug as config } from '../config';

gulp.task('pug', function buildHTML() {
    return gulp.src(config.src)
    .pipe(pug({}))
    .pipe(beautify())
    .pipe(gulp.dest(config.dest))
});
