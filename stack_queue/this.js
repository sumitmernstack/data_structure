class stack {
    constructor() {
        this.item = []
    }

    Insert(ele) {
        this.item.push(ele)
    }

    print() {
        //this.item.length()
        console.log(this.item)
    }
    isEmpty() {
        return this.item.length === 0
        //  console.log(  this.item.length)
    }

    pop() {
        console.log(this.isEmpty)
        if (this.isEmpty) {
            return this.item.pop()
        }
    }
}
const Stack = new stack()

// Stack.Insert(12)
// Stack.Insert(13)
// Stack.Insert(14)
// Stack.print()
// Stack.Insert(15)
// Stack.print()
// Stack.isEmpty()
// Stack.pop()
// Stack.print()

//max

let arr = [1, 2, 3, 9, 5, 6, 7, 8, 2, 0]

function maxarr(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]

    }
    return max
}
//console.log(maxarr(arr))

let arrbrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function binarysrc(arr, ele) {//7
    let l = 0
    let r = arr.length - 1


    while (r >= l) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] == ele) {
            return `${mid}`
        }

        if (ele > arr[mid]) {// 7 > 5.5

            l = mid + 1
        } else {
            // 3 < 5.5
            r = mid - 1
        }

    } return -1

}
console.log(binarysrc(arrbrr, 7))

//remove dublicate

let dubarr = [1, 2, 3, 2, 9, 1, 2, 3, 4, 5, 6, 7, 6, 8]

function dunrem(arr) {
    let obj = {}
    let res = []

    for (const element of arr) {
        if (!obj[element]) {
            obj[element] = true;
            res.push(element)
        }
    }
    return res
} console.log(dunrem(dubarr))

//occ

function occur(str) {
    let obj = {}
    for (const element of str) {
        obj[element] = (obj[element] || 0) + 1
    }
    return obj
}
console.log(occur("my name Ris sumitr kesahri"))

//call back
function parent(str, callback) {
    console.log(`hi ${str}`)
    callback("ganesh")
}

function child(val) {
    console.log(`hi ${val}`)
}

parent("sumit", child)

//event emmiter

const EventEmitter = require('events');
const eventtest = new EventEmitter();

eventtest.on("test", (val) => {
    console.log(val)
})

eventtest.emit("test", "rat")

let miss = [3, 4, 6, 7, 8, 9, 12]

function missing(arr) {
    let diff = arr[0] - 0
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i] - i
        if (diff !== curr) {
            //return diff +i
            while (diff !== curr) {
                console.log(diff + i)
                diff++
            }

        }

    }

}
console.log(missing(miss))

//max word len

let arrmaxstrlen = "my name is sumit kesahri gsdhhhhhhhhh qq"

function maxstr(str) {
    str = str.split(" ")
    console.log(str)
    let max = str[0].length;
    let maxstr = str[0]
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i].length )
        if (str[i].length > max) {
            max = str[i].length
            maxstr = str[i]
        }

    }
    return ` ${maxstr},${max}`
}
console.log(maxstr(arrmaxstrlen))



let revstr = "sumit"
function rev(str) {
    str = str.split("")
    for (let i = 0; i < Math.floor((str.length) / 2); i++) {

        let tmp = str[i]
        str[i] = str[str.length - i - 1]
        str[str.length - i - 1] = tmp
    }
    return str
}

console.log(rev(revstr))

//delete

let delarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function del(arr, index) {
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1]

    }
    arr.length--;
    console.log(arr)
    return arr

}
del(delarr,4)

//insert ele
let insele=[1,2,3,4,5]
function insert(arr,index,ele){
    for (let i = arr.length-1; i >=index; i--) {
        arr[i+1]=arr[i]
        
    }
    arr[index]=ele
    return arr
}
console.log(insert(insele,2,66))

//call back
function parent(name,callback) {
    console.log(`hi ${name}`)
    callback("tets")
}

function child(val) {
    console.log(`hi ${val}`)
}
parent("sumit",child)


//call abck hell

function first(callback) {
    console.log("First");
    callback();
}

function second(callback) {
    console.log("Second");
    callback();
}

function third() {
    console.log("Third");
}

// Callback Hell version:
first(() => {
    second(() => {
        third();
    });
});


//two pointer sum

let a=[2,3,7,8,9,10]

function tp(arr,target_sum) { //9
    
    let l=0
    let r=arr.length-1

    while(r>l){
        let sum=arr[r]+arr[l]
        console.log("sum===>",sum)
        if(target_sum==sum){
            console.log( `${arr[l]},${arr[r]}`)
            return `${arr[l]},${arr[r]}`
        }

        if(target_sum>sum){
r++;
        }else{
            l--
        }
  

    }
    return -1

}
console.log(tp(arr,12))