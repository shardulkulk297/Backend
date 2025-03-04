const {readFile} = require('fs');

const getText = (path)=>{
    return new Promise((res, rej)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                rej(err);
            }
            else{
                res(data);
            }
        })

    })
}

getText('./content/first.txt')
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})
