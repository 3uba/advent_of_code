const fs = require('fs')
const c = (n,d,w,l,h) => n[1].trim() === h[0] ? d : (n[1].trim() === h[1] ? w : l)
function main() {
    let p = 0
    const d = {'A':'X', 'B':'Y', 'C':'Z'}

    fs.readFileSync('2/data.txt', 'utf-8')
        .split(/\n/)
        .forEach(l => {
            l = l.split(" ")
            switch (d[l[0]].trim()) {
                case "X":
                    p+=c(l,4,8,3, ["X", "Y"])
                break;
                case "Y":
                    p+=c(l,5,9,1, ["Y", "Z"])
                break;
                case "Z":
                    p+=c(l,6,7,2, ["Z", "X"])
                break;
            }
        })

    console.log(`Part 1: ${p}`)
}
main()