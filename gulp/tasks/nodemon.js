import gulp     from 'gulp';
import nodemon  from 'gulp-nodemon';

// nodemon
gulp.task('nodemon', () => {
    nodemon({
        script: 'index.js',
        ext: 'js pug css',
        ignore: ['gulp', 'node_modules']
    })
    .on('restart', () => {});
});

