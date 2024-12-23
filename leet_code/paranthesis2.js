function removeInvalidBrackets(s) {
    let stack = [];
    let invalidIndices = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();  // Found a match, pop the corresponding '('
            } else {
                invalidIndices.add(i);  // Invalid closing bracket
            }
        }
    }

    console.log("log at 18", stack, invalidIndices)
    // Add the remaining unmatched opening brackets to invalidIndices
    while (stack.length > 0) {
        //console.log("stackpop",stack.pop())
        invalidIndices.add(stack.pop())
    }
    console.log("log at 23", invalidIndices)
    // Construct the valid string, skipping invalid brackets
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i];
            console.log(s[i])
        }
    }

    return result;
}

// Test examples
//console.log(removeInvalidBrackets("ja)swi(nd)er)"));  // Output: "jaswi(nd)er"
//console.log(removeInvalidBrackets("))((“"));           // Output: ""


function paran(str) {
    let stack = [];
    let invalidset = new Set();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i)
        }
        else if (str[i] === ')') {
            if (stack.length > 0) {
                stack.pop()
            } else {
                // console.log(str[i])
                invalidset.add(i)
            }
        }
    }

    while (stack.length > 0) {
        invalidset.add(stack.pop())
    }

    let string = ""
    for (let j = 0; j < str.length; j++) {

        if (!invalidset.has(j)) {
            string += str[j]
        }
    }


    return string
}
// Test examples
// console.log(paran("ja)swi(nd)er)"));  // Output: "jaswi(nd)er"
// console.log(paran("))((“"));           // Output: ""


function p(params) {
    let stack = [];
    let invalid = new Set();
    for (let i = 0; i < params.length; i++) {

        if (params[i] == "(") {
            stack.push(i)
        } else if (params[i] == ")") {

            if (stack.length > 0) {
                stack.pop()
            } else {
                invalid.add(i)
            }
        }
    }
    while (stack.length > 0) {
        invalid.add(stack.pop())
    }
    let res=""
    for (let i = 0; i < params.length; i++) {
        if(!invalid.has(i)){
            res+=params[i]
        }
        
    }
    return res
}
// Test examples
console.log(p("ja)swi(nd)er)"));  // Output: "jaswi(nd)er"
console.log(p("))((“"));           // Output: ""