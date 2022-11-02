// i = i+1  i++
//짝수
// for(let i = 0; i<=10; i++){
//     if(i%2 ==0){
//         console.log("누나!!", i)
//     }
// }
// i+2 => i = i+2
// i+5 => i = i+5
// for(let i = 0; i<=10; i+=2){
//         console.log("누나!!", i)
// }

//구구단
//이중 for문 효율적이지 않다
for(let i =2; i<=9; i++){
    for(let j = 1; j<=9;j++){
        console.log(i+"*"+j+"="+i*j)
    }
}
let i =2
while(i<11){
    console.log("while문 실행",i)
    i++;
}

let fruit = ["banana","apple","grape","mango"]

for(let i = 0; i<fruit.length; i++){
    console.log(fruit[i])
}




