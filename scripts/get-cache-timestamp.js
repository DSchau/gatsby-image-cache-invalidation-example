const path = require('path')
const fs = require('fs')
const moment = require('moment')

const cache = path.join(__dirname, `..`, `timestamps.json`)

const getExisting = () => {
  try {
    return JSON.parse(fs.readFileSync(cache), 'utf8')
  } catch (e) {
    return {}
  }
}

const cacheDir = path.join(__dirname, '..', '.cache', 'caches', 'gatsby-source-remote-images')

const existing = getExisting()
const files = fs.readdirSync(cacheDir)
  .filter(dir => fs.statSync(path.join(cacheDir, dir)).isDirectory())
  .reduce((all, folder) => {
    return all.concat(
      fs.readdirSync(path.join(cacheDir, folder))
        .map(file => [file, fs.statSync(path.join(cacheDir, folder, file)).mtime])
    )
  }, [])

const lookup = files.reduce((merged, [name, timestamp]) => {
  merged[name] = timestamp
  return merged
}, {})

const toTimestamp = date => moment(date).format('HH:mm:ss')

Object.keys(lookup)
  .forEach(file => {
    console.log(`${file}: ${[]
      .concat(existing[file])
      .concat(lookup[file])
      .map(toTimestamp)
      .join(' | ')
    }`)
  })

fs.writeFileSync(cache, JSON.stringify(lookup, null, 2), 'utf8')
