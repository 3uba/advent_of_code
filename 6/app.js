const fs = require('fs')

function main () {
    let file = fs.readFileSync('data.txt', 'utf-8')
    for (let x = 0; x < file.length; x++) {
        // Part 1
        // if(new Set(file.substring(x, x+4)).size === 4) {
        //     console.log(x+4)
        //     process.exit()
        // }
        // Part 2
        if(new Set(file.substring(x, x+14)).size === 14) {
            console.log(x+14)
            process.exit()
        }
    }
}
main()