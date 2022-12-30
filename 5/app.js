const fs = require('fs')
const converter = require('./converter')

const main = async () => {
    let file = await converter(() => fs.readFileSync('ship.txt', 'utf-8').split(/\n/).map(l => l.slice(1).replaceAll(' ', '')))
    file = file.map(f => f.split(''))
    let lines = fs.readFileSync('data.txt', 'utf-8')
                    .split(/\n/).map(line => line.replaceAll('\r', ''))
    lines.slice(lines.indexOf(''))
        .map(line => line.replace(/[^\d\s]/g, '').trim().split('  '))
        .map(arr => arr.map(Number))
        .forEach(arr => {
            for (let x = 0; x < arr[0]; x++) {
                let j = file[arr[1] - 1].splice(-1, 1)[0]
                file[arr[2] - 1].push(j)
            }
        })
    console.log(`Part 1: ${file}`)
}
main()