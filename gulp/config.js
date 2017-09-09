import path from 'path';

const CSS_VERSION = '1.0.0';

export const pug = {
    src: path.join(__dirname, '../template/pug/**/*pug'),
    dest: path.join(__dirname, '../template/dist/html'),
};

export const sass = {
    src: path.join(__dirname, '../template/sass/**/*scss'),
    dest: path.join(__dirname, `../template/dist/css/${CSS_VERSION}`),
};

export const watch = {
    sass: sass.src,
    pug:  pug.src,
};
