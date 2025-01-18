const fs = require('fs')

let dataToWrite=Buffer.from("Welcome to GBC!")

fs.writeFile('output.txt', dataToWrite, (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Async callback Data successfully writen.")
})
// dataToWrite= "Welcome to George brown college."
fs.writeFileSync('output.txt',dataToWrite)
console.log('Sync callback DATA write success')