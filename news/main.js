let news = [];
let page = 1;
let totalPage = 0;
let menus = document.querySelectorAll(".menus button");
menus.forEach(menu=> menu.addEventListener("click", (event)=>{
    getNewsByTopic(event);
}));
let searchBtn = document.getElementById("search_button")
let url ="";
// 각 함수에서 필요하 url를 만든다
//api 호출 함수를 부른다.
const getNews = async()=>{
    try{
        let header = new Headers({
            "x-api-key" : "HZDRX1CWfXGOk9S6LoDnVzSGbyz4cU2bosXFUFLyZaY"
        });
        let response = await  fetch(url, {headers: header}); //ajax, ftch
        let data = await response.json();
        if(response.status ==  200){
            if(data.total_hits == 0){
                throw new Error("검색된 결과값이 없습니다.")
            }
            console.log("받는 데이터",data);
            news = data.articles
            totalPage = data.total_pages;
            page = data.page;
            render();
            PageNation();
        } else{
            throw new Error(data.message);
        }
    } catch(error){
        errorRender(error.message);
    }
   
}
const getlatestNews =async ()=>{
    url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=sport&page_size=10");
    getNews();
  
};

const getNewsByTopic = async (event)=>{
    console.log("클릭됨", event.target.textContent);
    let topic  = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${topic}&page_size=10`);
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

const errorRender=  (message)=>{
    let errorHTML = `<div class="alert alert-danger" role="alert">${message}</div>`
    document.getElementById("news_board").innerHTML = errorHTML;
}
const PageNation  = ()=>{
    let pagenationHTML = '';
    // total_page
    //page
    //page group
    let page_group = Math.ceil(page/5);
    //last
    let last = page_group*5;
    console.log(page_group);
    //first
    let first = last -4;

    for(let i = first; i<=last; i++){
        pagenationHTML += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
    }
    document.querySelector(".pagination").innerHTML = pagenationHTML;

    //first~last 페이지 프린트
    //
}





searchBtn.addEventListener("click",getNewsBykeyword)
getlatestNews();