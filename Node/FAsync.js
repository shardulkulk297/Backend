const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    

    const first = result;
    readFile('./content/sec.txt', 'utf8', (err, result)=>{

        if(err){
            console.log(err)
            return;
        }
       
        const sec = result;
        
    writeFile('./content/result-async.txt', `${first}, ${sec}`, (err, result)=>{
        if(err)
        {
            console.log(err)
            return
        }

        console.log('done with this task');
        
    });

    })

    
    
});

console.log('starting the next task');

