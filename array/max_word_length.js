let arr = "my name is sumit kesahri gsdhhhhhhhhh qq"
console.log(arr.length)
function max(arr) {
    arr = arr.split(" ")

    let max_val = ''
    let max_len = 0

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].length)
        if (arr[i].length > max_len) {

            max_len = arr[i].length
            max_val = arr[i]
        }
    }
    return max_val
}

console.log(max(arr))

//reverse a string

let revstr = "sumit"
function rev(str) {
    str = str.split("")
    for (let i = 0; i < Math.floor((str.length) / 2); i++) {

       let tmp=str[i]
       str[i]=str[str.length-i-1]
       str[str.length-i-1]=tmp
    }
  return str
}
console.log(str)