const {readFile, writeFile} = require('fs').promises;

const start = async()=>{

    try {
        // Ensure the correct path for the files
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        
        console.log(first
            , second);
        await writeFile('./content/result-async.txt', `Pokemon sun and moon: ${first}, ${second}`, {flag: 'a'});
        
    } catch (error) {
        console.log(error);
    }

}
start();