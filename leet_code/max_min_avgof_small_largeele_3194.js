// [2,3,4,5,6,12,1]

function min_max_avg(arr) {
    arr=arr.sort((a,b)=>a-b)
    console.log(arr)
    let len=Math.floor(arr.length/2);
    for (let i = 0; i <len; i++) {
     let val=((arr[i]+arr[arr.length-1-i])/2)
        console.log(val)
        
    }
  
} 
min_max_avg([2,-3,5,6,12,1])