
const FocusTel1 = ()=>{
    let Tel1 = document.getElementById("tel1").value;
    if(Tel1.length ===3){
        document.getElementById("tel2").focus();
    }
};

const FocusTel2 = () =>{
    let Tel2 = document.getElementById("tel2").value;
    if(Tel2.length ===4){
        document.getElementById("tel3").focus();
    }
}
const BtnAble = () =>{
    let Tel3 = document.getElementById("tel3").value;
    if(Tel3.length ===4){
        document.getElementById("btn_submit").disabled = false;
        document.getElementById("btn_complete").disabled = false;
    }
}
const submitNum = () =>{
    document.getElementById("token").innerHTML =String( Math.floor(Math.random()*1000000)).padStart(6,"0");
}

 // 휴대전화를 인증번호 전송 버튼이 활성화 버튼을 누르면 토큰을 생성하여 화면에 보여주세요
 //



