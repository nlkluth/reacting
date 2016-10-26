const babelJest = require('babel-jest');
const path = require('path');

module.exports = {
  process(src, filename) {
    if ((/\.(gif|jpg|jpeg|tiff|png|css|styl|less|scss)$/i).test(path.basename(filename))) {
      return '';
    }

    if (filename.indexOf('node_modules') === -1) {
      src = babelJest.process(src, filename);
    }

    return src;
  }
};
