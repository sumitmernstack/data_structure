let a = [1, 2, 3, 4, 5]
let b = [2, 3, 4, 6, 7, 8, 9, 10]
let c=[];

function union(a, b) {
    let i = 0
    let j = 0
    let k = 0
    let m = a.length
    let n = b.length

    while (m > i && n > j) {
        if (a[i] < b[j]) {
            c[k] = a[i]
            k++
            i++
        }
        else if (a[i] > b[j]) {
            c[k] = b[j]
            k++
            j++
        }
        else{
            c[k]=a[i]
            i++
            j++
            k++
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

console.log(union(a,b))