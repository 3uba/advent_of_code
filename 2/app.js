const fs = require('fs')
const c = (n,d,w,l,h) => n.trim() === h[0] ? d : (n.trim() === h[1] ? w : l)
const u = (l,f,s,t) => l.trim() === "A" ? f : (l.trim() === "B" ? s : t)
function main() {
    let p1 = 0,
        p2 = 0
    const d = {'A':'X', 'B':'Y', 'C':'Z'}

    fs.readFileSync('2/data.txt', 'utf-8')
        .split(/\n/)
        .forEach(l => {
            l = l.split(" ")
            switch (d[l[0]]) {
                case "X": p1+=c(l[1],4,8,3, ["X", "Y"]); break;
                case "Y": p1+=c(l[1],5,9,1, ["Y", "Z"]); break;
                case "Z": p1+=c(l[1],6,7,2, ["Z", "X"]); break;
            }
            switch (l[1].trim()) {
                case "X": p2+=u(l[0],3,1,2);   break;
                case "Y": p2+=u(l[0],1,2,3)+3; break;
                case "Z": p2+=u(l[0],2,3,1)+6; break;
            }
        })

    console.log(`Part 1: ${p1}`)
    console.log(`Part 2: ${p2}`)
}
main()