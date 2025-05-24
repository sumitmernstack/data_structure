// let arr = [3, 4, 5, 6, 8, 9, 12]
// function miss(arr) {
//     let diff = arr[0] - 0

//     for (let i = 1; i < arr.length; i++) {
//         if (diff !== arr[i] - i) {
//             while (diff !== arr[i] - i) {
//                 console.log(diff + i)
//                 diff++;
//             }
//             //  diff++;
//         }

//     }
// }
// console.log(miss(arr))

// //move zero
// //[0,1,0,3,0,3,4,5]

// function move(arr) {
//     let itt = 0

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             arr[itt] = arr[i]
//             itt++;
//         }
//     }
//     while (arr.length > itt) {
//         arr[itt] = 0
//         itt++
//     }
//     return arr
// }
// console.log(move([0, 1, 0, 3, 0, 3, 4, 5]))

// //

// class stack {
//     constructor() {
//         this.item = []
//     }

//     push(ele) {
//         this.item.push(ele)
//     }
//     peek() {
//         console.log(this.item)
//     }
//     isEmpty() {
//         return this.item.length
//     }
//     pop() {
//         if (this.isEmpty() !== 0) {
//             this.item.pop()
//         }else{
//             return `array is empty`
//         }
//     }
// }
// let Stack= new stack()
// // Stack.push(12)
// // Stack.push(12)
// // Stack.push(12)
// // Stack.push(112)
// // Stack.push(122)
// // Stack.push(127)
// Stack.peek()
// Stack.pop()
// Stack.peek()

//rotate array

// let r=[1,2,3,4,5]

// function rot(arr,time) {
    
//     for (let i = 0; i <=time ; i++) {
//         let last_element=arr[arr.length-1];
//         for (let j =arr.length-1; j >0; j--) {
           
//             arr[j-1]=arr[j]
//             //arr[arr.length-1]=last_element
//         }
//         arr[0] = last_element
//     }
//     return arr 
// }
// console.log(rot(r,1))



let r = [1, 2, 3, 4, 5];

function rot(arr, time) {
   // time = time % arr.length; // Handle rotations larger than array size
    for (let i = 0; i < time; i++) {
        let last_element = arr[arr.length - 1];
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1]; // Shift elements right
        }
        arr[0] = last_element;
    }
    return arr;
}

console.log(rot(r, 1)); // Output: [5, 1, 2, 3, 4]
