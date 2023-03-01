const {readFileSync, writeFileSync} = require('fs');

//const fs = require('fs')

console.log('start')

const first = readFileSync('./subfolder/first.txt', 'utf8');
const second = readFileSync('./subfolder/second.txt', 'utf8');

console.log(first, second)

writeFileSync(
    './subfolder/result-sync.txt', `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting with the next task')