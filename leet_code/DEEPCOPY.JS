// // normal copy
// let obj = { key: "Sumit" ,state:{
//     name:"up",
//     dist:{
//         name:"varaansi",pin:232101
//     }
// }}
// let obj2=obj
// obj2.key="raj"
// obj2.state.dist.name="mumbai"
// console.log(obj2,obj)

//shallow copy

// let shobj = { key: "Sumit" ,state:{
//     name:"up",
//     dist:{
//         name:"varaansi",pin:232101
//     }
// }}
// let shobj2={...shobj}

//  shobj2.key="raj"

//  shobj2.state.dist.name="mumbai"
// console.log(shobj,shobj2)

//deep copy

let shobj = {
    key: "Sumit", state: {
        name: "up",
        dist: {
            name: "varaansi", pin: 232101
        }
    }
}
let shobj2 = JSON.parse(JSON.stringify(shobj))

shobj2.key = "raj"

shobj2.state.dist.name = "mumbai"
console.log(shobj, shobj2)


function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    let copyvalue = Array.isArray(obj) ? [] : {}
    let keys = Object.keys(obj)
console.log("keys----->",keys)
    for (let i = 0; i < keys.length; i++) {
        copyvalue[keys[i]] = deepClone(obj[keys[i]]);

    }
    return copyvalue;
}

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(deepClone(shobj))


let paran2 = "()[]{}"

function pt(arr) {
    arr = arr.split("")
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            tmp.push(")")
        } else if (arr[i] === '{') {
            tmp.push("}")
        } else if (arr[i] === '[') {
            tmp.push("]")
        }
        else if (tmp.pop() !== arr[i]) {
            return false
        }


    } return true
}

console.log(pt(paran2))


function dc(obj) {

    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    let check = Array.isArray(obj) ? [] : {}
    let key = Object.entries(obj)
    for (let i = 0; i < key.length; i++) {
check(key[i])=dc(obj[k[i]])

    }

}

let fs = require('fs')

let read = fs.createWriteStream('a.txt', { encoding: 'utf-8' })

read.write('data')


class stack{
constructor(){
    this.item=[]
}

push(ele){
this.item.push(ele)
}

peek(){
console.log(this.item)
}

isEmpty(){
return this.item.length === 0
}
pop(){
if(!this.isEmpty()){
    this.item.pop()
}
}

}

let Stack=new stack()
Stack.peek()
Stack.push(10)
Stack.push(10)
Stack.push(10)
Stack.push(10)
Stack.peek()
Stack.pop()
Stack.peek()