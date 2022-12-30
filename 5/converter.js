const fs = require('fs');

let converted = []

let lines = fs.readFileSync('5/data.txt', 'utf-8')
    .split(/\n/).map(line => line.replaceAll('\r', ''))

lines.slice(0, lines.indexOf(''))
    .map(line => (line.split('').slice(1).filter((_, i) => i % 4 === 0)))
    .forEach(arr => arr.forEach((i, key) => converted[key] = (converted[key]) ? [i, ...converted[key]] : i))

fs.writeFile('5/ship.txt', converted.map(arr => arr.join('')).join('\n'), (err) => err ? console.log(err) : null)