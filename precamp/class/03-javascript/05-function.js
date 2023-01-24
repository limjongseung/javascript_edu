
const RandomNum =()=>{
    let RandomNumber = String(Math.floor(Math.random() *1000000)).padStart(6,"0");
    console.log(RandomNumber);
    document.getElementById("num").innerText = RandomNumber;
    document.getElementById("num").style.color = "#"+RandomNumber;
}