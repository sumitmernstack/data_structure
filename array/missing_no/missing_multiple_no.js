
// let arr = [1, 2, 3, 4, 6, 9, 14, 16]

// function miss(arr) {
//     let diff = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         let cur = arr[i] - i;
//         if (diff != cur) {

//             while (cur != diff) {
//                 console.log(i + diff)

//                 diff++;
//             }

//         }..

//     }
// }
// //miss(arr)

// //reAVISION
// let val = [5, 6, 7, 9, 10, 12]

// function missnum(arr) {
//     let diff = arr[0] - 0
//     for (let i = 1; i < arr.length; i++) {
//         if (diff != arr[i] - i) {
//             return diff + i
//         }

//     }

// }
// console.log(missnum(val))

//let [3,4,5,7,8,9]

function miss(arr) {
    let diff = arr[0] - 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i] - i
        if (diff != current) {
            while(diff != current){
                console.log(diff+i)
diff++
            }            
        }

    }
}

console.log(miss([3,4,5,7,8,9,11]))
