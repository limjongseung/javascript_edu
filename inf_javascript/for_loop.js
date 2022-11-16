let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Eilison",
    "Tim Cook",
    "Lloyd Blankfein" 
]
// for (let i =0; i<names.length;i++){
//     console.log(names[i]);
// }


// names.forEach(function (item){
//     console.log(item);
// });
names.forEach((item,index)=>{console.log(item,index)});


let ceoList = [
    {name: "Larry Page",age:23,ceo:true},
    {name: "Tim Cook",age:40,ceo:true},
    {name: "Elon Musk",age:55,ceo:false},
]

let data = ceoList.map((item)=>{
    return item.name
})
console.log(data);
//filter
let data2 = names.filter((item)=>{
    return item.startsWith("L")
})
console.log(data2)
//!some
let data3 = names.some((item)=>{
    return item.startsWith("A")
    //boolean값으로 나타냄
})
console.log("some:", data3)
//! every
let data4 = names.every((item)=>{
    return item.startsWith("L")
})
console.log("every:" ,data4)
//! find
let data5 = names.find((item)=>{
    return item.startsWith("L")
});
//첫번째만 찾고 끝냄
console.log("find:" ,data5)
//!findIndex
let data6 = names.findIndex((item)=>{
    return item.startsWith("L")
});
//첫번째만 찾고 끝냄
console.log("find:" ,data6)





