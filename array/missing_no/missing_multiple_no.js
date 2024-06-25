
let arr = [1, 2, 3, 4, 6, 9,14,16]

function miss(arr) {
    let diff = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i] - i;
        if (diff != cur) {

            while (cur!=diff) {
            console.log(i + diff)

                diff++;
            }

        }
    }
}
miss(arr)