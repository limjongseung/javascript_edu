//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췃습니다.
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 up!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 수자를 또 입력하면 , 알려준다, 기회를 깍지 않는다.

let num = Math.floor(Math.random() * 100 +1) ;
let userValue = document.getElementById("user_input");
let BtnPlay = document.getElementById("play_btn");
let resultArea = document.getElementById("result_area")
let Btnreset = document.getElementById("reset");
let ChanceArea = document.getElementById("chance_area");
let chances = 5;
console.log("정답", num);

ChanceArea.innerHTML = `남은 기회는 ${chances}`;
BtnPlay.addEventListener("click",play);
Btnreset.addEventListener("click",reset);

function play(){
    if(userValue.value>100 || userValue.value < 1){
        resultArea.className += "on";
        resultArea.textContent = "1 부터 100까지 숫자를 입력하세요.";
        return
    }
    chances--;
    ChanceArea.innerHTML = `남은 기회:${chances}`;
    if(userValue.value == num){
        resultArea.textContent = "정답입니다.";
        BtnPlay.disabled= true;
    } else if (userValue.value > num){
        resultArea.textContent = "Down!!";
    } else if(userValue.value < num){
        resultArea.textContent = "UP!!";
    }
    if (chances <= 0 ){
        BtnPlay.disabled= true;
    }
}

function reset(){
    chances = 5;
    userValue.value = "";
    ChanceArea.innerHTML = `남은 기회:${chances}`;
    resultArea.textContent = "결과가 나온다";
    BtnPlay.disabled= false;
}













