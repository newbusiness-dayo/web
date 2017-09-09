import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import { sass as config } from '../config';

gulp.task('sass', function() {
    gulp.src(config.src)
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.dest));
});

