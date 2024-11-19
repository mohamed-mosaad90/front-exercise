// var divElement = document.querySelector("div");

// var createElement=document.createElement("nav")

// var create=document.createTextNode("a7aaaaa")
//  createElement.appendChild(create)//<nav>a7aaaaa</nav>
// divElement.appendChild(create)
// createElement.appendChild(divElement)
// document.body.appendChild(createElement)


// console.log(divElement);
// console.log(createElement);

var show = document.getElementById("show");
var request = new XMLHttpRequest();
var res;
request.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=769884b3661de0072a88a39a82eaeffb");//connection has been established ==>0

request.send(); //==>1
// console.log(request.response);
request.addEventListener("readystatechange", function () {
    // console.log(request.readyState);
    if (request.readyState === 4) {
        // console.log(JSON.parse(request.response).page);
        
        res = JSON.parse(request.response).results;//srting 
     displayData()
    }
    
})

function displayData() {
    
    var cartona=``;
    
    console.log(res);
    for(var i=0;i<res.length;i++){
        // console.log(res[i].id);
        
cartona+=`
            <div class="col-md-4" >
            <img class="w-100" alt="" src="https://image.tmdb.org/t/p/w500${res[i].backdrop_path}}">
                <h3>${res[i].title}</h3>
                <p>${res[i].overview.split(" ").splice(0, 10).join(" ")}</p>
                <p>rate is==> ${res[i].vote_average}</p>
            </div>
`
}
    show.innerHTML=cartona;


}
//4
//1-readyState =0;connection established
//2- readyState=1 ; send request
//3- readyState=2 ;data proccessing ===> null
//4-readyState =4 ;response ready

//status
//status ==>404

//status ==> 403 forbidden

//status ==> 200 ok return successfully


