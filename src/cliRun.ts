// parse the commandline
let runs:number = 1;
let lessSecure = false;

program
  .version('0.0.2-0')
  .option('-s, --silent', 'Output only the generated password')
  .option('-q, --quantity <n>', 'The quantity of passwords to output, as an integer', parseInt)
  .option('-l, --less-secure', 'Do not include the randomly placed integer')
  .parse(process.argv);

if (program.silent) {silent = true;};
if (program.quantity) {runs = program.quantity};
if (program.lessSecure) {lessSecure = true}

generatePass(runs, lessSecure);