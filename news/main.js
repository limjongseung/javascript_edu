let news = [];
const getlatestNews =async ()=>{
    let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business");

    let header = new Headers({
        "x-api-key" : 'fYEf-o_ZgcV51yQRCFoy19zcDrrPqoLMBjjeyf75_3M'
    });
    let response = await  fetch(url, {headers: header}); //ajax, ftch
    let data = await response.json();
    news = data.articles;
    console.log(news);

};



getlatestNews();