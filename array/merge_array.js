let a = [1, 47, 85, 91, 99] //i
let b = [2, 5, 11, 101, 1023, 82] //j
let c = [];

function mergearr(a, b) {

    let i = 0;
    let j = 0;
    let k = 0;
    let m = a.length
    let n = b.length

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            c[k] = a[i]
            k++
            i++
        } else {
            c[k] = b[j]
            k++
            j++
        }
    }

    while (i < m) {
        c[k] = a[i]
        k++
        i++
    }

    while (j < n) {
        c[k] = b[j]
        k++
        j++
    }

    return c
}

console.log(mergearr(a, b))