// let arr = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];
// function flattenArray(array) {
//     let result = [];
//     for (let element of array) {
//         console.log("---->", element)
//         if (Array.isArray(element)) {
//             let flatInnerArray = flattenArray(element);  // Flatten the inner array manually
//             for (let value of flatInnerArray) {
//                 result.push(value);  // Push each value from the flattened inner array
//             }
//         } else {
//             console.log("else--->", element)
//             result.push(element);  // Add non-array elements
//         }
//     }
//     return result;
// }

// // Bubble Sort function
// function bubbleSort(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 // Swap elements
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }



// //let flattenedArr = flattenArray(arr);
// //let sortedArr = bubbleSort(flattenedArr);

// //console.log(flattenedArr);

// function flat(arr) {

//     let tmp = [];
//     for (let ele of arr) {
//         if (Array.isArray(ele)) {
//             let responce = flat(ele)
//             for (let nele of responce) {
//                 tmp.push(nele)
//             }

//         } else {
//             tmp.push(ele)
//         }
//     }
//     return tmp
// }

// //console.log(flat(arr));





// function flatarr(arr) {

//     let tmp = [];
//     for (let ele of arr) {
//         if (Array.isArray(ele)) {
//             let res = flatarr(ele)
//             for (let nele of res) {
//                 tmp.push(nele)
//             }
//         }
//         else {
//             tmp.push(ele)
//         }

//     }
//     return tmp.sort((a, b) => a - b)
// }
// //console.log(flatarr(arr))



// let array = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];

// function fa(arr) {
//     let tmp = []
//     console.log(arr)
//     for (const element of arr) {
//         if (Array.isArray(element)) {
//             let res = fa(element)
//             for (const nested_ele of res) {
//                 tmp.push(nested_ele)
//             }
//         } else {
//             tmp.push(element)
//         }

//     }
//     return tmp
// }

// console.log(fa(array))



// let a = [99, 3, 4, 5, 6, 2, 3, 11, 22, 8]

// function max(arr) {
//     let maxele = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (maxele > arr[i]) {
//             maxele = arr[i]
//         }

//     }
//     return maxele

// }
// console.log(max(a))

// let ab = { 3: 1, 6: 2, 2: 9 }

// function maxmin(arr) {
//     let max_key = 0
//     let max_val = 0
//     for (const element in arr) {
//       console.log(element, arr[element])
//         if (arr[element] > max_val) {

//             max_val=arr[element]
//             max_key = element
//         }
//     }
//     return max_key + "<--->" +max_val
// }
// console.log("res",maxmin(ab))

// let arrdub=[1,1,23,4,5,76,5,98,4,5,1,1,1,34]

// function dub(arr) {
//     let obj={}
// for (const i of arr) {
//     obj[i]=(obj[i] ||0) + 1
// }
// return obj
// }

// console.log(dub(arrdub))

// let revarr=[1,2,3,4,5,6,7,8.9,10]

// function reverse(arr) {

//     let len=arr.length;
//     let half=Math.floor(len/2)

//     for (let i = 0; i < half; i++) {
//       //  const element = array[i];
//       let tmp=arr[i];
//       arr[i]=arr[len-i-1]
//       arr[len-i-1]=tmp

//     }
//     return arr;

// }
// console.log(reverse(revarr))

let a = [1, 2, 3, 4, 5]
let b = [2, 3, 4, 6, 7, 8, 9, 10]
let c = [];

function merge(a, b) {
    let i = 0
    let j = 0
    let k = 0
    let a_len = a.length;
    let b_len = b.length;

    while (a_len > i && b_len > j) {
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
    while (a_len > i) {
        c[k] = a[i]
        k++
        i++
    }
    while (b_len > j) {
        c[k] = b[j]
        k++
        j++
    }
    return c
}

console.log (merge(a, b))