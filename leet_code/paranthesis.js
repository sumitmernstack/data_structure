let string = "iodhfgo[dd]{}kjfjkldj[]kfjhkjdk()"

function remove_paranthesis(str) {
    str = str.split("")
    let specialchar = []
    for (const char of str) {
        if (!char.match(/[a-zA-Z0-9\s]/)) {
            specialchar.push(char)
        }
    }
    return specialchar
}

//console.log('---->',remove_paranthesis(string))

let paran = "()[]{}"

function paranthesis(str) {
    str = str.split("")
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            stack.push(")")
        }
        else if (str[i] == "{") {
            stack.push("}")
        }
        else if (str[i] == "[") {
            stack.push("]")
        }
        else if(    stack.pop() !==str[i]){
    
            return false
        }

    }
    console.log(stack)
    if(stack.length==0){
        return true
    }else{
        return false
    }
}
//console.log(paranthesis(paran))




let paran2 = "sumit()[]{}"

function checkparan(params) {
    let tmp = []
    for (let i = 0; i < params.length; i++) {
        if (!params[i].match(/[a-zA-Z0-9/s]/)) {
            if (params[i] === "(") {
                tmp.push(')')
            }
            else if (params[i] === "{") {
                tmp.push('}')
            }
            else if (params[i] === "[") {
                tmp.push(']')
            } else if (params[i] != tmp.pop()) {
                return false
            }
        } else {
            console.log("else part",params[i])
        }


    }
    return true
}

console.log(checkparan(paran2),"data")
