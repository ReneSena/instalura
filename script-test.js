const shell = require('shelljs');

const result = shell.exec('git diff --name-only main', { silent: true });

// eslint-disable-next-line no-console
console.log(result.stdout.split('\n'));
