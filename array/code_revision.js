
let arr = [1, 2, 3, 99, 4, 5, 6, 7, 8, 9, 33]

function max(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i]
        }

    }
    return max
}
//console.log(max(arr))

//sort
function sort(arr, index) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }

    }

    return arr[index - 1]
}
//console.log(sort(arr,5))

let str = "my name is sumit kesahri gsdhhhhhhhhh qq"
function max_str(str) {
    str = str.split(" ")
    console.log(str)
    let max = str[0]
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > max.length) {
            max = str[i]
        }

    }
    return max
}
//console.log(max_str(str))

//delete the element

let delarray = [1, 2, 3, 4, 5] //3

function del(arr, index) {
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1]

    }
    arr.length--
    return arr
}
//console.log(del(delarray,1))

//insert ele
let insarr = [1, 2, 3, 4, 6, 7];

function insertelement(arr, index, element) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i]
    }
    arr[index] = element;
    return arr
}
//console.log(insertelement(insarr,4,5))

//rotate array

let rotarr = [1, 2, 3, 4, 5]
function rotatearray(arr, time) {
    for (let i = 0; i <= time; i++) {
        let last = arr[arr.length - 1] //5
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1]
        }
        arr[0] = last
    }
    return arr
}
//console.log(rotatearray(rotarr,0))

let MISS_arr = [4, 5, 7, 8, 10, 11]

function checkmissingno(arr) {
    let diffrence = arr[0] - 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (diffrence != arr[i] - i) {
            // console.log("",i)
            while (diffrence != arr[i] - i) {
                console.log(`the missing value ${diffrence + i}`)
                diffrence++;
            }

        }
    }
    //  return 'no missing value'
}
//console.log(checkmissingno(MISS_arr))



let missarr = [4, 5, 7, 8, 9, 11]
function missno(arr) {
    let diff = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i] - i
        if (diff != cur) {
            while (cur != diff) {
                console.log(diff + i)
                diff++;
            }


        }
    }
}
//missno(missarr)


let arrm = [1, 2, 3, 4, 6, 9, 14, 16]

function miss(arr) {
    let diff = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i] - i;
        if (diff != cur) {

            while (cur != diff) {
                console.log(i + diff)

                diff++;
            }

        }
    }
}
//miss(arrm)




let roa = [1, 2, 3, 4, 5]

function ro(arr, n) {

    for (let i = 0; i < n; i++) {
        let last = arr[arr.length - 1]
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1]
        }
        arr[0] = last
    }
    return arr

}
//console.log(ro(roa, 2))

let arr1=[1,2,9,11,14]
let arr2=[0,2,3,14,19]
let c=[];
function mergearr(a,b){
    let m=a.length
    let n=b.length
    let i=0
    let j=0
    let k=0

    while(m>i && n>j){
        if(a[i]<b[j]){
            c[k]=a[i]
            i++
            k++
        }else{
            c[k]=b[j]
            j++
            k++
        }
    }
    while(m>i){
        c[k]=a[i]
            i++
            k++
    }
    while(n>j){
        c[k]=b[j]
            j++
            k++
    }
    return c
}
//console.log(mergearr(arr1,arr2))



// let arr1=[1,2,9,11]
// let arr2=[0,3,14,19]
// let c=[];
function unionarr(a,b){
    let m=a.length
    let n=b.length
    let i=0
    let j=0
    let k=0

    while(m>i && n>j){
        if(a[i]<b[j]){
            c[k]=a[i]
            i++
            k++
        }else if(a[i]>b[j]){
            c[k]=b[j]
            j++
            k++
        }else{
            c[k]=b[j]
            j++
            k++
            i++
        }
    }
    while(m>i){
        c[k]=a[i]
            i++
            k++
    }
    while(n>j){
        c[k]=b[j]
            j++
            k++
    }
    return c
}
console.log(unionarr(arr1,arr2))