const fs = require('fs')
const path = require('path')

const pkgPath = path.join(__dirname, '..', './node_modules/gatsby-transformer-remark/package.json')

const pkg = require(pkgPath)

if (pkg.version === '2.4.0') {
  pkg.version = '2.4.1'
} else {
  pkg.version = '2.4.0'
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8')
