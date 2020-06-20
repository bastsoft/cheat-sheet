const testFolder = './md'
const fs = require('fs')

const jsonString = JSON.stringify(
  fs.readdirSync(testFolder).filter((file) => file.includes('.md'))
)

fs.writeFile('./md/data/generate.json', jsonString, (err) => {
  if (err) {
    console.log('Error writing file', err)
  } else {
    console.log('Successfully wrote file')
  }
})
