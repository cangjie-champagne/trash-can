const { Command } = require('commander');
const { name, version } = require('./package.json');
const program = new Command();

program
  .name(name)
  .description('A chinese peeper-spray method for common words on the alphabet.')
  .version(version);

program.command('parse')
  .description('Parse a string into substrings')
  .argument('<string>', 'string to parse')
  .action((word) => {
    let result = '';
  
    console.log(word);
  });


program.parse();