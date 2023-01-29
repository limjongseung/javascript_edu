
let isStarted = false;

const RandomNum =()=>{

  if(isStarted === false){
    // 타이머가 작동중이 아니리때
    isStarted = true; 
    document.getElementById("myBtn").disabled = false;
    let RandomNumber = String(Math.floor(Math.random() *1000000)).padStart(6,"0");
    console.log(RandomNumber);
    document.getElementById("num").innerText = RandomNumber;
    document.getElementById("num").style.color = "#"+RandomNumber;
    let time = 10;
  let timer
    timer = setInterval(function(){
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2,"0");
        time = time -1;
      if(time >=0){
        document.getElementById("timer").innerText = min +":"+sec;
      } else {
        document.getElementById("myBtn").disabled =true;
        isStarted = false;
        console.log("타이머 작동중");
        clearInterval(timer);
      }
    },1000)
  } else {
    //타이머가 작동중일때
  }


};
