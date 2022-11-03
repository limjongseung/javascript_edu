//meetAt 함수를 만들어주세요
//meetAt(2022) ; -> 2022년
//meetAt(2032,3); //결과 -> 2032년 3월
//meetAt(1987,10,28) 1987/10/28

function meetAt(year,month,date){
    if(year && month && date){
        return `${year}/ ${month}/${date}`
    } else if(year && month){
        return `${year}년 ${month}월`
    } else if( yaer){
        return `${year}년`
    }
}
console.log(meetAt(2022,1,17))





