#!/usr/bin/env node

'use strict';


const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.log('Usage: packer');
  console.log('--debug');
  process.exit(0);
}

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit(0);
}

if (commands[0] === '--debug') {
  const fs = require('fs-extra');
  const packer = require('../');

  const npmPath = `${process.cwd()}/npm`;

  if (fs.pathExistsSync(npmPath)) {
  }
}
