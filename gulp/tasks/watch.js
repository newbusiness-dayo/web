import gulp    from 'gulp';
import { watch as config } from '../config';

gulp.task('watch', () => {
    gulp.watch([config.sass], ['sass']);
    gulp.watch([config.pug],  ['pug']);
});
