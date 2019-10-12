#! /usr/bin/env node

const yParser = require('yargs-parser');
const chalk = require('chalk');
const { existsSync } = require('fs');
const { join } = require('path');
const { version } = require('../package');
const run = require('./run');

const args = yParser(process.argv.slice(2));
if (args.v || args.version) {
    console.log(version);
    if (existsSync(join(__dirname, '.local'))) {
        console.log(chalk.cyan('@local'));
    }
    process.exit(0);
}

const name = args._[0] || '';
const { type } = args;
delete args.type;
run({
    name,
    type,
    args,
});
