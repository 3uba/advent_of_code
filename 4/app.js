const fs = require('fs')
let i = 0, j = 0
function main() {
    fs.readFileSync('./4/data.txt', 'utf-8')
        .split(/\n/)
        .forEach(line => {
            let [n1,n2,n3,n4] = line.replace(/\r/, '').split(/[-,]+/).map(Number)
            if ((n1 <= n3 && n2 >= n4) || (n1 >= n3 && n2 <= n4)) i++
            let tab1 = [], tab2 = []
            for (let x = n1; x <= n2; x++) tab1.push(x)
            for (let y = n3; y <= n4; y++) tab2.push(y)
            if (tab1.filter(x => tab2.includes(x)).length) j++
        })
    console.log(`Part 1: ${i}`)
    console.log(`Part 2: ${j}`)
}
main()