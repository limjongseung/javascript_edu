
// 유져가 값을 입력한다.
// +버튼을 클릭하면, 할일이 추가된다
// delete버튼을 누르면 할일 삭제된다.
// check 버튼을 누르면 할이 끝나면서 밑줄이 간다
//1 check 버튼을 클릭하는 순간 true, false
//2 true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로
//진행중인  끝남 탬을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중 탭은 진행중인 탭만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

//수평선 만들기 위한 변수 담기
let UnderLine = document.getElementById("under_line");
let HorizontalMenu = document.querySelectorAll(".task_tabs .menus");

//할일 어플 만들기 위한 변수 담기
let taskInput = document.getElementById("task_input")
let addBtn  = document.getElementById("btn_add");
let tabs = document.querySelectorAll(".task_tabs div")
let taskList = [];
let filterList = "";
let mode = "all"
// console.log(menu);
// console.log(UnderLine);

HorizontalMenu.forEach((menu)=>
menu.addEventListener ("click", (e)=> horizontalIndicator(e)));
function horizontalIndicator(e){
    UnderLine.style.left = e.currentTarget.offsetLeft +"px";
    UnderLine.style.width = e.currentTarget.offsetWidth + "px";
    UnderLine.style.top = e.currentTarget.offsetHeight + "px";
}
addBtn.addEventListener("click",addTask);


function addTask(){ 
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    render();
    taskInput.value = "";
}

function render(){
    let list = [];
    if(mode=="all"){
        list = taskList;
    } else if (mode == "ongoing" || mode == "done"){
        list = filterList;
    }
    let resultHTML = "";
    for(let i = 0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class= "task_done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">check</button>
                <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">check</button>
                <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        }
    } 
    document.getElementById("task_board").innerHTML= resultHTML;
}

















