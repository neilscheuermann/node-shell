function pwd() {
  process.stdout.write(process.cwd());

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}

module.exports = pwd;
