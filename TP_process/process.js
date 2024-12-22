console.log(process.pid);
console.log(process.cwd());

process.on('exit', (code)=> {
    console.log(`le processus se termine aec le code ${code}`);
    
})
