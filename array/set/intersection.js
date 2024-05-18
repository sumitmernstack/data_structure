// intersection pick only common element from both the array;

let a = [2,6,10,12]
let b = [3,6,7,10,13]
let c = []

function intersection(a, b) {
    let m = a.length
    let n = b.length
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
           i++
        } else if(a[i] > b[j]){
           j++
        }else{
            c[k++] = a[i++]
            j++
        }
    }

    return c
}

console.log(intersection(a,b))