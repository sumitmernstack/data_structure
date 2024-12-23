let array=[
    {
      "id": 1,
      
      "phone": "3-770-736-8031 x56442",
      
      
    },
    
    {
      "id": 1,
      
      "phone": "1-770-736-8031 x56442",
      
      
    },
    {
      "id": 1,
      
      "phone": "1-770-736-8031 x56442",
      
      
    },
    {
      "id": 1,
      
      "phone": "1-770-736-8031 x56442",
      
      
    },
    {
      "id": 1,
      
      "phone": "1-770-736-8031 x56442",
      
      
    },
    {
      "id": 1,
      
      "phone": "4-770-736-8031 x56442",
      
      
    },
     {
      "id": 1,
      
      "phone": "4-770-736-8031 x56442",
      
      
    },
     {
      "id": 1,
      
      "phone": "4-770-736-8031 x56442",
      
      
    },
     {
      "id": 1,
      
      "phone": "4-770-736-8031 x56442",
      
      
    },
     {
      "id": 1,
      
      "phone": "1-770-736-8031 x56442",
      
      
    }
    
  
    ]
    
    
    function count(arr,targer,max_count){
        let cnt=0
        for(let i=0;i<arr.length;i++){
           console.log(i)
            if(arr[i].phone[0]==targer){
                cnt++;
            }
         
         if( cnt === max_count )
             break;
         
        } 
    
       return  cnt === max_count ?  `max cnt compleate`:`not compleate`
        
     
    }
    console.log(count(array,"1",5))