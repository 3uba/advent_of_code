const fs = require('fs')
function main() {
    let arr = [], i = 0;
    fs.readFileSync('./1/data.txt', 'utf-8')
        .split(/\n/)
        .forEach((l) => l.trim().length ? arr[i]=parseInt(l)+(arr[i] ? parseInt(arr[i]) : 0) : i++)

    console.log(Math.max(...arr))
}

main()