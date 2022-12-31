const fs = require('fs')

let dirMap = ['/']
let currentDir = '/'
let cat = {'/': {}}
let finalValue = 0,
    lowesDir =  70000000

function addDirectory (obj, map) {
    if (map.length === 0) return;
    const [head, ...tail] = map
    if (!obj.hasOwnProperty(head)) obj[head] = {}
    addDirectory(obj[head], tail)
}
function addFile (obj, map, size, file) {
    if (map.length === 0) return;
    const [head, ...tail] = map
    if (map.length === 1) obj[head] = {...obj[head], [file]: size}
    addFile(obj[head], tail, size, file)
}
function calculateSize(obj) {
    let totalSize = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            totalSize += calculateSize(value);
        } else {
            totalSize += Number(value);
        }
    }
    obj._size = totalSize;
    if (totalSize < 100000) finalValue+=totalSize
    return totalSize;
}
function findDir(obj, needSpace) {
    for (const [key,value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            if (value._size > needSpace && value._size < lowesDir) {
                lowesDir = value._size
            }
            findDir(value, needSpace)
        }
    }
}
function main () {
    fs.readFileSync('data.txt', 'utf-8')
        .split(/\n/)
        .forEach(line => {
            line = line.replaceAll('\r', '').split(' ')
            if(line[0] === "$") {
                if (line[1] === "cd") {
                    if (line[2] === "..") {
                        currentDir = dirMap.pop()
                        if(dirMap.length === 0) {
                            dirMap = ['/']
                        }
                    } else if(line[2] === '/') {
                        dirMap = ['/']
                        currentDir = '/'
                    } else {
                        dirMap.push(`/${line[2]}`)
                        currentDir = `/${line[2]}`
                    }
                }
            } else {
                if (line[0] === 'dir') {
                    for (let i = 0; i < dirMap.length; i++) {
                        if (!cat.hasOwnProperty(dirMap[i])) {
                            addDirectory(cat, dirMap)
                        }
                    }
                } else {
                    for (let i = 0; i < dirMap.length; i++) {
                        addFile(cat, dirMap, line[0], line[1])
                    }
                }
            }
        })
    calculateSize(cat)
    console.log(`Part 1: ${finalValue}`)
    findDir(cat, -40000000 + cat._size)
    console.log(`Part 2: ${lowesDir}`)

    // console.log(cat)
}
main()