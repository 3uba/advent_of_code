const fs = require('fs')

let pointsValue = 1,
    lettersLength = 0,
    points = 0,
    part1 = 0,
    part2 = 0

function compare (ch,t1,t2,t3) {
    const l1 = t1?.replace(new RegExp(`[^${ch}]`, 'g'), '').length
    const l2 = t2?.replace(new RegExp(`[^${ch}]`, 'g'), '').length
    const l3 = (t3) ? t3?.replace(new RegExp(`[^${ch}]`, 'g'), '').length : 1
    const count = (t3) ? 3 : 2
    if (Math.min(...[l1,l2,l3])*count >= lettersLength) {
        lettersLength = Math.min(...[l1,l2,l3])*count
        points = pointsValue
    }
}

function loops (t1,t2,t3=null) {
    pointsValue=1, lettersLength=0, points=0
    for (let ch = 'a'; ch <= 'z'; ch = String.fromCharCode(ch.charCodeAt(0) + 1), pointsValue++)
        compare(ch,t1,t2,t3)
    for (let ch = 'A'; ch <= 'Z'; ch = String.fromCharCode(ch.charCodeAt(0) + 1), pointsValue++)
        compare(ch,t1,t2,t3)
}

function main () {
    let text = fs.readFileSync('3/data.txt', 'utf-8').split(/\n/)
    //Part 1
    text.forEach(line => {
        let t1 = line.slice(0,line.length/2),
            t2 = line.slice(line.length/2)
        loops(t1,t2)
        part1+=points;
    })
    // Part 2
    let obj = []
    for (let i = 0, j = 0; i < text.length+3; i++, j++) {
        obj = (j % 3 === 0) ? [...obj, [text[i-3], text[i-2], text[i-1]]] : obj
    }
    obj.forEach(lines => {
        let [t1,t2,t3] = lines
        loops(t1,t2,t3)
        part2+=points
    })
    console.log(`Part 1: ${part1}`)
    console.log(`Part 2: ${part2}`)
}
main()