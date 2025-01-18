const fs = require('fs')

let header = "eid,first_name,last_name,city"

fs.appendFileSync('employee.csv', header)

async function writeEmployeeData(eid, fnm, lnm, city){
    const data = `${eid},${fnm},${lnm},${city}`
    try {
        await fs.promises.appendFile('employee.csv', data)
        console.log('Employee record added successfully..')
    } catch (error) {
         console.log(err)
    }
} 

writeEmployeeData(1, 'Iffat', 'Nabila', 'Toronto')
writeEmployeeData(2, 'Ana', 'Pet', 'Edmonto')
writeEmployeeData(3, 'Jack', 'Smith', 'New York')