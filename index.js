const { Command } = require('commander');
const { name, version } = require('./package.json');
const { TrashCan } = require('./src/index');
const program = new Command();

program
  .name(name)
  .description('A chinese peeper-spray method for common words on the alphabet.')
  .version(version);

program.command('parse')
  .description('Parse a string into cangjie keyboard input letters')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    const p = new TrashCan(s, debug);

    console.log(p.result);
  });


program.parse();
