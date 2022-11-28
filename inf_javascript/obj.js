let name = "samsung store"
class product{ // 추상화
    name="";
    price =0;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return this.price + "만원"
    }//캡슐화
    setPrice(price){
        if(price < 0){
            throw Error("마이너스값 안됨")
        }
        this.price = price;

    }
}
class TV extends product{
    size=" ";
    constructor(name,price,size){//생성자
        //생성자
        super(name,price);
        this.size = size
    }
}

let tv1 = new TV("noona'tv",200,"56inch")
console.log(tv1);
let tv2 = new TV("ultraTv",300,"28inch")
console.log(tv2.name);

let tv3 ={
    name:"ultra'tv",
    size:"36inch"
}

class AC extends product {//상속
    type = "";
}
class laptop extends product{
    weight = ""
}
tv1.setPrice(-100);
console.log(tv1.price);
console.log(tv1.getPrice(),tv2.name);









