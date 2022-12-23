const babel = require('@babel/core');
const path = require('path');
const fs = require('fs');

const babelrc = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

const code = babel.transform(babelrc, {
    filename: 'index.js',
    presets: ['@babel/preset-env'],
});

console.log(code);
