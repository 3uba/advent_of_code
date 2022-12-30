const fs = require('fs')
const converter = require('./converter')
const main = async () => {
    let file = await converter(() => fs.readFileSync('ship.txt', 'utf-8').split(/\n/).map(l => l.slice(1).replaceAll(' ', '')))
    // Part 1
    // file = file.map(f => f.split(''))
    let lines = fs.readFileSync('data.txt', 'utf-8')
                    .split(/\n/).map(line => line.replaceAll('\r', ''))
    lines.slice(lines.indexOf(''))
        .map(line => line.replace(/[^\d\s]/g, '').trim().split('  '))
        .map(arr => arr.map(Number))
        .forEach(arr => {
            // Part 2
            if(arr[0]) {
                const j = file[arr[1] - 1].slice(-arr[0]);
                file[arr[1] - 1] = file[arr[1] - 1].slice(0, -arr[0]);
                file[arr[2] - 1] += j;
            }
            // Part 1
            // for (let x = 0; x < arr[0]; x++) {
            //     let j = file[arr[1] - 1].splice(-1, 1)[0]
            //     file[arr[2] - 1].push(j)
            // }
        })
    console.log(file)
}
main()