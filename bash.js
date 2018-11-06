process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  // console.log('raw input', data);
  const cmd = data.toString().trim();
  // console.log('clean input', cmd);

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
