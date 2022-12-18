let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach(menu=> menu.addEventListener("click", (event)=>{
    getNewsByTopic(event);
}));
let searchBtn = document.getElementById("search_button")
let url ="";
// 각 함수에서 필요하 url를 만든다
//api 호출 함수를 부른다.
const getNews = async()=>{
    let header = new Headers({
        "x-api-key" : "UkVGZfSI9CyRG1ceVd18H8HW8BwsyHIt6z5QKYgeuco"
    });
    let response = await  fetch(url, {headers: header}); //ajax, ftch
    let data = await response.json();
    console.log(data) ;
    news = data.articles
    console.log(news);
    render();
}
const getlatestNews =async ()=>{
    url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10");
    getNews();
  
};

const getNewsByTopic = async (event)=>{
    console.log("클릭됨", event.target.textContent);
    let topic  = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`);
    getNews();

}
const getNewsBykeyword = async()=>{
    //1검색키워드 읽어오기
    //2. url에 검색 키워 부치기
    //3. 헤더 준비
    //url 부르기
    //5. 데이터 가져오기
    //6 데이터 보여주기
    let keyword = document.getElementById('search_input').value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
   getNews();
}

const render  = () => {
    let newsHTML = "";
    newsHTML = news.map(item =>{
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

searchBtn.addEventListener("click",getNewsBykeyword)

getlatestNews();