const pwd = require('./pwd')
const ls = require('./ls')

const prompt = data => {
  console.log(data);
  process.stdout.write('> ');
}

prompt('Welcome to Node Shell!')

process.stdin.on('data', data => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');

  switch (command) {
    case 'pwd':
      prompt(pwd(prompt));
      break;
    case 'ls':
      ls(prompt);
      break;
    case 'cat':
      require('./cat')(arg, prompt);
      break;
    case 'curl':
      require('./curl')(arg, prompt);
      break;
    default:
      prompt('not found');
  }
});
