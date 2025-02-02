const os = require('os');

//Info about current user

const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds

const runtime = os.uptime();
console.log(runtime) 

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    
}

console.log(currentOs)