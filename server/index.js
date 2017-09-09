import express    from 'express';
import morgan  from 'morgan';
import favicon from 'serve-favicon';
import path    from 'path';

const app = express('');

app.set('views', path.join(__dirname, '../template/pug'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/../template/dist/')));
//app.use(favicon(path.join(__dirname, '/../assets/img/favicon.png')));
app.use(morgan('dev'));

// router
import PageRouter from './routes/page';
app.use('/', PageRouter);

app.listen(8000);
