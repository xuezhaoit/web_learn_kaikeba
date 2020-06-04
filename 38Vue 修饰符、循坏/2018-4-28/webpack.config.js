const pathlib=require('path');

module.exports={
  entry: './js/main',
  output: {
    path: pathlib.resolve('dest'),
    filename: 'bundle.js'
  }
};
