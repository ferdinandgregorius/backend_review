const {readFile, writeFile} = require('fs');

//const fs = require('fs')

console.log('start')

readFile('./subfolder/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.error(err)
        return;
    }

    const first = result;

    readFile('./subfolder/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.error(err)
            return;
        }

        const second = result

        writeFile('./subfolder/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.error(err)
                return;
            }

            console.log('done with this task')
        })
    })
})
console.log('starting next task')