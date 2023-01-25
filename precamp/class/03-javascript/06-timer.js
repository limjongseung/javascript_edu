



const RandomNum =()=>{
    let RandomNumber = String(Math.floor(Math.random() *1000000)).padStart(6,"0");
    console.log(RandomNumber);
    document.getElementById("num").innerText = RandomNumber;
    document.getElementById("num").style.color = "#"+RandomNumber;
    let time = 60;
    setInterval(function(){
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2,"0");
        time = time -1;
      if(time >=0){
        document.getElementById("timer").innerText = min +":"+sec;
      } else if(time <= 0){
        document.getElementById("myBtn").disabled =true;
      }
    },1000)
};
