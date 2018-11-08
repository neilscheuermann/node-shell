const fs = require('fs');

module.exports = function(done) {
  //Is a built in node module.  Can tell because it's 'fs' and not needing a
  // file path with './fs'
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join('\n'));
    }
  });
}
