//missing no

let miss = [1, 2, 3, 4, 6, 7, 9]

function missing(arr) {
    let diff = arr[0] - 0
    for (let i = 0; i < arr.length; i++) {
        //  console.log(diff, arr[i] - i)
        if (diff != arr[i] - i) {
            //  return diff + i
            while (diff != arr[i] - i) {
                console.log(diff + i)
                diff++;
            }
        }
    }
}
console.log(missing(miss))
//binary search

let barr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function binary(arr, target) {
    let l = 0
    let r = arr.length - 1

    while (r > l) {
        let mid = Math.floor((l + r) / 2)
        if (target === arr[mid]) {
            return mid
        }
        if (target > arr[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
console.log(binary(barr, 7))

// two pointer

let tparr = [1, 2, 3, 5, 7, 8, 9, 10]

function tp(arr, target) { //10

    let l = 0
    let r = arr.length - 1
    while (r > l) {
        let sum = arr[r] + arr[l]
        if (target == sum) {
            return `${l},${r}`
        }
        if (target > sum) {
            l++
        } else {
            r--
        }
    }
    return -1

}
console.log(tp(tparr, 10))
// max sum of sub array

//console.log(sunarrsum([3, 8, 2, 5, 7, 6, 12], 4))

function sumOfSubArr(arr, window) {
    let sum = 0;
    let max=arr[0]
    for (let i = 0; i < window; i++) {
        console.log
        sum += arr[i];

    }

    for (let j = 1; j <= arr.length-window; j++) {
        console.log('-----',arr[j-1], arr[window+j-1])
        let val=sum -arr[j-1]+arr[window+j-1]
      //  console.log(val)
        if(val>max){
            max=val
        }
        
    }
    console.log('hhhhhhh',sum,max)
}
sumOfSubArr([3, 8, 2, 5, 7, 6, 12], 4)