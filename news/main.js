
let news = [];
const getlatestNews =async ()=>{
    let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10");

    let header = new Headers({"x-api-key" : "amG_c3TcHIIbTrzuK9yC9-sYhYoXSypke4t5OCni29s"})
    let response = await fetch(url,{headers:header}) //ajax, ftch
<<<<<<< HEAD
    let data = response.json();
    news = data.articles;

    render();

    

=======
    let data = await response.json();
    console.log(data);
    console.log(data.articles);
>>>>>>> 5caabbce77c1c6cb4f45f69a597e34122fdf5c43
};

const render = ()=>{
    let newsHTML = "";

    document.getElementById("")
}

getlatestNews();