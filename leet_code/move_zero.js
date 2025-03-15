//[0,1,2,0,99]

function move(arr) {

    let itt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[itt] = arr[i]
            itt++;
        }
    }
    while (itt < arr.length) {
        arr[itt] = 0
        itt++
    }

    return arr;
}
console.log(move([0,1,2,0,99]))