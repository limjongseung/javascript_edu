let news = [];
const getlatestNews =async ()=>{
    let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10");

    let header = new Headers({
        "x-api-key" : 'amG_c3TcHIIbTrzuK9yC9-sYhYoXSypke4t5OCni29s'
    });
    let response = await  fetch(url, {headers: header}); //ajax, ftch
    let data = await response.json();
    news = data.articles;
    console.log(news);
    console.log(data.media);

    render();
};


const render  = () =>{
    let newsHTML = "";
    newsHTML = news.map (news =>{
        return   `<div class="row news">
        <div class="col-lg-4">
            <img  class="news_img "src="${data.media}{" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${data.title}</h2>
            <p>배고프다...</p>
            <div>졸려요</div>
        </div>
    </div>`           
    });
}



getlatestNews();