const fs = require('fs')
let i = 0
function main() {
    fs.readFileSync('./4/data.txt', 'utf-8')
        .split(/\n/)
        .forEach(line => {
            let [n1,n2,n3,n4] = line.replace(/\r/, '').split(/[-,]+/).map(Number)
            if ((n1 <= n3 && n2 >= n4) || (n1 >= n3 && n2 <= n4)) i++
        })
    console.log(`Part 1: ${i}`)
}
main()