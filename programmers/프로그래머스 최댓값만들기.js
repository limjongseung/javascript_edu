function solution(numbers) {
    let arr= numbers.sort((a,b) => b-a);
       let max = arr[0] * arr[1];
       let max2 = arr[arr.length -1] *arr[arr.length -2];
       if(max >= max2){
           return max;
       } else{
           return max2
       }
       
   }