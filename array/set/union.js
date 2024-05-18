// union remove the dublicate element from both the array;

let a = [2,6,10,15,20,25]
let b = [3,6,7,15,20]
let c = []

function union(a, b) {
    let m = a.length
    let n = b.length
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            c[k++] = a[i++]
        } else if(a[i] > b[j]){
            c[k++] = b[j++]
        }else{
            c[k++] = a[i++]
            j++
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

console.log(union(a,b))