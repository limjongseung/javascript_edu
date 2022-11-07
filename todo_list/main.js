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

let taskInput = document.getElementById("task_input")
console.log(taskInput);
let addBtn = document.getElementById("btn_add");
let taskList = [];
addBtn.addEventListener("click", addTask);

function addTask(){
    // console.log("click")
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    render();
    console.log(taskList);
}

function render(){
    let resultHTML = "";
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML += `    <div class="task">
            <div class = "task_done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick = "deleteTask()">delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `    <div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick="deleteTask()">delete</button>
            </div>
        </div>`;
        }
    }
    document.getElementById("task_board").innerHTML = resultHTML;
}

function toggleComplete(id){
    // console.log("check됬음")
    // console.log("id:" ,id);
    for(let i=0; i < taskList.length; i++) {
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(){
    console.log("삭제하자");
}
// 랜덤 아이디 생성 함수
function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 9);
}







