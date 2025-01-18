const fs = require('fs')

let dataToAppend=("Data to append")

fs.promises.appendFile('output.txt', dataToAppend)
    .then(()=>{
        console.log("Data Appended")
        
    })
    .catch((err) => {
        console.log(err)
    })