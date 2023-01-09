let classMate = ["철수","영희","훈이"]
// undefined
classMate
//(3) ['철수', '영희', '훈이']
classMate[0]
//'철수'
classMate[2]
//'훈이'
classMates.includes["훈이"]
//VM474:1 Uncaught ReferenceError: classMates is not defined
  //  at <anonymous>:1:1
//(anonymous) @ VM474:1
classMate.includes["훈이"]
//undefined
classMate.push("맹구");
//4
classMate
//(4) ['철수', '영희', '훈이', '맹구']
    classMate.pop();
//'맹구'
classMate
//(3) ['철수', '영희', '훈이']