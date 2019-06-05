const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'gatsby-config.js')

const contents = fs.readFileSync(filePath, 'utf8')

fs.writeFileSync(filePath, contents + '\n', 'utf8')
