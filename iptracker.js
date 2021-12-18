let inp = document.querySelector("input"),
    btn = document.querySelector("button"),
    apiKey = "at_GshH2E4GJIEsNDwuTs1qTv4rp6vLG";


const ipPara = document.querySelector(".ippara");
const locationPara = document.querySelector(".locationpara");
const timezonePara = document.querySelector(".timezonepara");
const ispPara = document.querySelector(".isppara");
// console.log(ipPara);
// console.log(inp,btn);

btn.addEventListener("click" , ()=>{
    const ipAddress = inp.value;
    console.log(ipAddress);
    let sd = fetchData("GET", ipAddress);
    
})


async function fetchData(method, data){
    try{
        let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${data}`, {method: method});
        let obj = await response.json();
        console.log(obj);
        let {ip, isp, location:{country,city,region,lat,lng , timezone}} = obj;
        console.log(ip,isp,country,region,city,lat,lng);
        ipPara.textContent = ip;
        locationPara.textContent = city;
        timezonePara.textContent = timezone;
        ispPara.textContent = isp;
        map.panTo(new L.LatLng(lat, lng));
    }

    catch{
        alert("Somthing wrong")
    }

    // const promise = new Promise((res,rej)=>{
    //     const xhr = new XMLHttpRequest();
    //     xhr.open(method, `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${data}`, true)
    //     xhr.responseType = "json";
    //     xhr.onload = function(){
    //         if(xhr.status >= 200 && xhr.status <= 300){
    //             res(xhr.response)
    //         }else{
    //             rej(new Error("Error!!"))
    //         }
    //     }
    //     xhr.send();
    // }).then(res=>gu=res);


    // return promise;
}

var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: false
    });

var map = L.map('map',
    {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 6
    }).setView([43.64701, -79.39425], 15);
setTimeout(function () { map.invalidateSize() }, 800);




// class 



