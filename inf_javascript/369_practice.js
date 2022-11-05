// 369가 들어가면 짝
for(let i= 1; i<=50; i++){
    let StringValue = i.toString()
    let result = ""
    for(let j = 0; j<StringValue.length; j++){
        if(StringValue[j] ==="3" || StringValue[j] ==="6" || StringValue == "9"){
           result= result + "짝" 
           // result += "짝"
        }
    }
    console.log(result.length>0? result:i)
}

















