const fs = require('fs')

const dirs = ['./src/db/migrations', './src/db/states']
for (let i = 0; i < dirs.length; i += 1) {
  const dir = dirs[i]

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}
