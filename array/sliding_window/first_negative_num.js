// let arr = [1, 3, -1, -3, 5, 3, 6, 7,-2]
// //let arr = [12, -1, 7, 8, -15, 30, 16, 28]
// let window_size = 3

// function negativenum(arr, window) {
//     let tmp = []
//     let len = arr.length;
//     let i = 0;
//     let j = 0;

//     while (j < len) {
//         if (j - i + 1 < window) {
//             j++
//         } else if (j - i + 1 == window) {
//             //  console.log("atat")
//             for (let k = j; k <= window; k++) {
//                 console.log(k,j)
//                 if (arr[k] < 0) {
//                     tmp.push(arr[k])
//                    // break;
//                 }
//             }
//             i++
//             j++
//         }



//     }
//     return tmp

// }
// console.log(negativenum(arr, window_size))




// @penumono
// 1 year ago
// Javascript implementation for this question

function negativeNumber(arr, k) {
  let i = 0,
    j = 0,
    list = [],
    ans = [];
  while (j < arr.length) {
    if (arr[j] < 0) {
      list.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    }
    else if (j - i + 1 === k) {
      console.log(list[0])
      ans.push(list[0] || 0);

      // If the first negative number is at the leftmost position, remove it from the list
      if (arr[i] === list[0]) {
        list.shift();
      }
      j++;
      i++;
    }
  }
  return ans;
}

console.log(negativeNumber([5, -2, 3, 4, -5], 2));