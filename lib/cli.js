#!/usr/bin/env node
'use strict';

var minimist = require('minimist');
var niv = require('./index.js');

var _require = require('./util.js');

var getUsage = _require.getUsage;


var options = {
  default: {
    destination: undefined,
    help: false,
    overwrite: undefined
  },
  alias: {
    destination: 'd',
    help: 'h',
    overwrite: 'o'
  }
};

var args = minimist(process.argv.slice(2), options);

if (args.help) {
  process.stdout.write(getUsage());
  process.exit(0);
}
if (!args._.length) {
  process.stderr.write(getUsage());
  process.exit(1);
}

niv.install(args._[0], args);