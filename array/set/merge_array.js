let a = [3, 8, 16, 20, 25]
let b = [4, 10, 12, 22, 23]
let c = []

function merge(a, b) {
    let m = a.length
    let n = b.length
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            c[k++] = a[i++]
        } else {
            c[k++] = b[j++]
        }
    }
console.log("--->",i,j)
    for (; i <m; i++) {
        c[k++] = a[i]
    }

    for (; j <n; j++) {
        c[k++] = b[j]
    }

    console.log("--->",i,j)
    return c
}

console.log(merge(a,b))