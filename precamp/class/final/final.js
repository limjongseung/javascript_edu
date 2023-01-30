
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




