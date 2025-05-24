//missing no

let missa = [2, 3, 4, 5, 6, 8, 9, 12]

function miss(arr) {
    let diff = arr[0] - 0
    for (let i = 0; i < arr.length; i++) {
        if (diff != arr[i] - i) {
            while (diff != arr[i] - i) {
                console.log(diff + i)
                diff++;
            }

        }

    }
}
//console.log(miss(missa))

//console.log(sunarrsum([3, 8, 2, 5, 7, 6, 12], 4))

//sliding window

function slid(arr, win) {
    let sum = 0
    for (let i = 0; i < win; i++) {
        sum += arr[i]

    }
    let max = sum;
    for (let i = 1; i <= arr.length - win; i++) {
        console.log("--->", sum, arr[i - 1], arr[i + win - 1])
        sum = sum - arr[i - 1] + arr[i - 1 + win]
        if (sum > max) {
            max = sum
        }
    }
    return sum
}
//console.log(slid([3, 8, 2, 5, 7, 6, 12], 4))
// flat arr

let flatarray = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];

function fl(arr) {

    let tmp = []
    for (const element of arr) {
        if (Array.isArray(element)) {
            let res = fl(element)
            for (const nestele of res) {
                tmp.push(nestele)
            }
        } else {
            tmp.push(element)
        }
    }
    return tmp
}
//console.log(fl(flatarray))

//rev

let revarr = [1, 2, 3, 4, 5, 6, 7]

function rev(arr) {
    let len = arr.length - 1
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let tmp = arr[i]
        arr[i] = arr[len - i]
        arr[len - i] = tmp

    }
    return arr
}


//console.log(rev(revarr))

//binary serach

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function bin(arr, target) {
    console.log("ssssssss")
    let l = 0
    let r = arr.length - 1
    while (r > l) {
        // let mid = Math.floor((l + r) / 2)
        let sum = arr[l] + arr[r]
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
console.log(bin(ar, 10))

let rot = [1, 2, 3, 4, 5, 6, 7]

function rote(arr, times) {
    for (let i = 0; i <times; i++) {
        let leas = arr[arr.length-1 ]
        for (let j = arr.length-1 ; j > 0; j--) {
          //  console.log(j)
            arr[j] = arr[j-1]
           
        } 
        arr[0] = leas

    }
return arr
}
console.log(rote(rot,1))

