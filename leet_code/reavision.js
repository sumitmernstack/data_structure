let arr = [1, [3, 3], [-2, [3, 5, [6, 7], 1], 0]];

function flat(arr) {
    let tmp = [];
    for (const iterator of arr) {

        if (Array.isArray(iterator)) {

            let responce = flat(iterator)
            for (let nestedElement of responce) {
                tmp.push(nestedElement)
            }

        } else {
            tmp.push(iterator)

        }
    }


    return tmp.sort((a, b) => a - b)
}

//console.log(flat(arr))


// Test examples
//console.log(removeInvalidBrackets("ja)swi(nd)er)"))

function paranthesis(str) {
    let tmp = [];
    let invalid = new Set();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            tmp.push(i)
        } else if (str[i] === ')') {
            if (tmp.length > 0) {
                tmp.pop()
            } else {
                invalid.add(i)
            }
        }
    }

    console.log(invalid, tmp)
    while (tmp.length > 0) {
        invalid.add(tmp.pop())
    }
    console.log(invalid, tmp)
    let string = ""
    for (let j = 0; j < str.length; j++) {

        if (!invalid.has(j)) {
            string += str[j]
        }

    }
    return string

}


// Test examples
//console.log(paranthesis("ja)swi(nd)er)"))
//console.log(paranthesis("))((“"));   

function fetchspecialchar(params) {
    params = params.split("")
    let tmp = ""

    for (const iterator of params) {
        if (!iterator.match(/[a-zA-z0-9/s]/)) {
            tmp += iterator
        }
    }
    return tmp
}
//console.log(fetchspecialchar("ja)swi(nd)er)"))


let paran = "sumit()[]{}"

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
            console.log(params[i])
        }


    }
    return true
}

console.log(checkparan(paran),"data")