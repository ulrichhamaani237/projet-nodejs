 const fs = require('fs');
  // definition de la promesse
  const readFilePromise = (filiname) =>  {
    return new Promise((resolve,reject) =>{
        fs.readFile(filiname,'utf-8',  (err, data)=>{
            if(err){
                reject(err);
            }else {resolve(data);}
        })
    })
  } 

  // utilisation de la promesse
  readFilePromise('./Asynchronsme/data.txt')
  .then((data) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  })
  .catch((error)=>{
    console.log('====================================');
    console.error(error);
    console.log('====================================');
  })

  console.log('====================================');
  console.log("Programme Principale!");
  console.log('====================================');