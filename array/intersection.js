let a = [1, 2, 3, 4, 5]
let b = [2, 3, 4, 6, 7, 8, 9, 10]
let c = [];

function union(a, b) {
    let i = 0
    let j = 0
    let k = 0
    let m = a.length
    let n = b.length

    while (m > i && n > j) {
        if (a[i] < b[j]) {
            i++
        }
        else if (a[i] > b[j]) {
            j++
        }
        else {
            c[k] = a[i]
            i++
            j++
            k++
        }

    }

    return c
}

console.log(union(a, b))