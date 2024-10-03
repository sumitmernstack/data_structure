function beuaty(number, window_size) {
    number = number.toString()
  
    let num_len = number.length;
   // console.log(num_len)
    let value = "";
    let counter = 0;
    for (let i = 0; i < num_len; i++) {
        value += number[i]
       console.log(value)
        if (i >= window_size-1) {

            if (number % parseInt(value) === 0) {
                counter++
                value.slice(1)
            }
        }

    }
    return counter

}

console.log(beuaty(10, 1))