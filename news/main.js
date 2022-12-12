
let news = [];
const getlatestNews =async ()=>{
    let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10");

    let header = new Headers({"x-api-key" : "amG_c3TcHIIbTrzuK9yC9-sYhYoXSypke4t5OCni29s"})
    let response = await fetch(url,{headers:header}) //ajax, ftch
    let data = response.json();
    news = data.articles;

    render();


};

const render = ()=>{
    let newsHTML = "";

    document.getElementById("")
}

getlatestNews();