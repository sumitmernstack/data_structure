let str = "ababcbacadefegdehijhklij";

function partion_lav(str) {
    //   console.log(str.length)
    let partti = [];
    for (let i = 0; i < str.length; i++) {

        let start = i;
        let end = str.lastIndexOf(str.charAt(i))
        for (let j = start; j < end.length; j++) {

            let lastindex0fnextele = str.lastIndexOf(str.charAt(j))

            if (lastindex0fnextele > end) {
                end = lastindex0fnextele
            }


        }
        partti.push(end - start + 1)
        i = end + 1
      //  console.log(str[i], end)

    }
    return partti
}
partion_lav(str)