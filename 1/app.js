const fs = require('fs')
function main() {
    let arr = [], i = 0, s = 0;
    fs.readFileSync('./1/data.txt', 'utf-8')
        .split(/\n/)
        .forEach((l) => l.trim().length ? arr[i]=parseInt(l)+(arr[i] ? parseInt(arr[i]) : 0) : i++);

    [...arr].sort((a,b) => b-a).slice(0,3).map(v => s+=v);

    console.log(`Part 1: ${Math.max(...arr)} \n`);
    console.log(`Part 2: ${s}`);
}

main()