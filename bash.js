process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  // console.log('raw input', data);
  const cmd = data.toString().trim();
  // console.log('clean input', cmd);

  require(`./${cmd}.js`)();
});
