let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach(menu=> menu.addEventListener("click", (event)=>{
    getNewsByTopic(event);
}))
const getlatestNews =async ()=>{
    let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=sport&page_size=10");

    let header = new Headers({
        "x-api-key" : 'ATMkH6Oj5yYSEO4k64qS5s-Jiy_0BLSQFYCbDwbP7Vk'
    });
    let response = await  fetch(url, {headers: header}); //ajax, ftch
    let data = await response.json();
    news = data.articles
    console.log(news);
    render();
};

const getNewsByTopic = async (event)=>{
    console.log("클릭됨", event.target.textContent);
    let topic  = event.target.textContent.toLowerCase();

    let header = new Headers({
        "x-api-key" : 'ATMkH6Oj5yYSEO4k64qS5s-Jiy_0BLSQFYCbDwbP7Vk'
    });
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&page_size=10&topic=${topic}`)
    console.log(url);
    let response = await  fetch(url, {headers: header});
    let data = await response.json();
    news = data.articles
    render();
}


const render  = () => {
    let newsHTML = "";
    newsHTML = news.map (item =>{
        return   `<div class="row news">
        <div class="col-lg-4">
            <img  class="news_img "src="${item.media}{" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>
            ${item.rights} ,  ${item.published_date}
            </div>
        </div>
    </div>`           
    });
    document.getElementById("news_board").innerHTML = newsHTML;
};



getlatestNews();