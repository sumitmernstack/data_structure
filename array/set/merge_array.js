// let a = [3, 8, 16, 20, 25]
// let b = [4, 10, 12, 22, 23]
// let c = []

// function merge(a, b) {
//     let m = a.length
//     let n = b.length
//     let i = 0;
//     let j = 0;
//     let k = 0;

//     while (i < m && j < n) {
//         if (a[i] < b[j]) {
//             c[k] = a[i]
//             k++
//             i++
//             console.log("-->",a[i++], a[i])
//         } else {
//             c[k] = b[j]
//             k++
//             j++
//             console.log("-->",b[j++], b[j])
//         }
//     }
// console.log("--->",i,j)
//     for ( ;i <m; i++) {
//         c[k++] = a[i]
//     }

//     for ( ;j <n; j++) {
//         c[k++] = b[j]
//     }

//     console.log("--->",i,j)
//     return c
// }

// console.log(merge(a,b))

let a = [3, 8, 16, 20, 25];
let b = [4, 10, 12, 22, 23];
let c = [];

function merge(a, b) {
    let m = a.length;
    let n = b.length;
    let i = 0;
    let j = 0;
    let k = 0;

    // Merging the two arrays
    while (i < m && j < n) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            k++;
            i++;
        } else {
            c[k] = b[j];
            k++;
            j++;
        }
    }

    // Copy remaining elements from array 'a' if any
    while (i < m) {
        c[k] = a[i];
            k++;
            i++;
    }

    // Copy remaining elements from array 'b' if any
    while (j < n) {
        c[k] = b[j];
        k++;
        j++;
    }

    return c;
}

console.log(merge(a, b));
