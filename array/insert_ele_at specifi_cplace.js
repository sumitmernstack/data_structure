
let array = [1, 2, 3, 5]
function insert(array, index, ele) {

    for (let i = array.length - 1; i >= index; i--) {
        array[i + 1] = array[i]
    }
    array[index] = ele
    return array
}

console.log(insert(array, 2, 66))
