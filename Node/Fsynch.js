const {readFileSync, writeFileSync} = require('fs');

console.log('start')

const first  = readFileSync('./content/first.txt', 'utf8');
const sec = readFileSync('./content/sec.txt', 'utf8');

// console.log(first);
// console.log(sec);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${sec}`, {flag: 'a'});

console.log("Done with the task")
console.log('Starting the next one');


