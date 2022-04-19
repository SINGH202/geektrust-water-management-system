const {printData} = require("./calculation")
const fs = require('fs')

try {
  const data = fs.readFileSync(process.argv[2], 'utf8')
  printData(data)
} catch (err) {
  console.error(err)
}

