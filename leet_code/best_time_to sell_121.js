
let rate = [7, 2, 4, 5, 1, 3, 6, 4, 9]

function timetoSell(rateList) {
    buy_price = rateList[0]
    max_profit = 0;
    for (let i = 1; i < rateList.length; i++) {

        if (buy_price > rateList[i]) {
            buy_price = rateList[i]
            //current_profit

        } else {
            let current_profit = rateList[i] - buy_price
            max_profit = Math.max(current_profit, max_profit)
        }

    }
    return max_profit
}
//console.log(timetoSell(rate))


let rateval = [7, 2, 4, 5, 1, 3, 6, 4, 9]

function best(arr) {
    let max_profit=0;
    let buyat=arr[0]

    for (let i = 1; i < arr.length; i++) {
       // const element = array[i];
       if(buyat >arr[i]){
        buyat=arr[i]
       }
       else{
        let cur= arr[i]-buyat
        max_profit=Math.max(cur,buyat)

       }
        
    }
    return max_profit
}
console.log(best(rateval))

//[7,2,4,5,1,3,6,4]

function sell(price){
    
    let buy_price=price[0]
    
    let max_profit=0
    
    for(let i=1;i<price.length;i++){
        if(price[i]<buy_price){
           buy_price = price[i]
        }
        else{
        let current=price[i]-buy_price
        max_profit=Math.max(current,max_profit)
        }
    }
    return max_profit
}
console.log(sell([7,2,4,5,1,3,6,4]))