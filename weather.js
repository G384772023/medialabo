/*
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
*/
////////// 課題3-2 ここからプログラムを書こう

let div=document.querySelector('div#result');
let ul=document.createElement('ul');
div.insertAdjacentElement('beforeend',ul);
let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
let li4=document.createElement('li');
let li5=document.createElement('li');
let li6=document.createElement('li');
let li7=document.createElement('li');
let li8=document.createElement('li');
let li9=document.createElement('li');
li1.textContent='緯度:';
li2.textContent='経度:';
li3.textContent='天気:';
li4.textContent='最低気温:';
li5.textContent='最高気温:';
li6.textContent='湿度:';
li7.textContent='風速:';
li8.textContent='風向:';
li9.textContent='都市名:';
ul.insertAdjacentElement('beforeend',li1);
ul.insertAdjacentElement('beforeend',li2);
ul.insertAdjacentElement('beforeend',li3);
ul.insertAdjacentElement('beforeend',li4);
ul.insertAdjacentElement('beforeend',li5);
ul.insertAdjacentElement('beforeend',li6);
ul.insertAdjacentElement('beforeend',li7);
ul.insertAdjacentElement('beforeend',li8);
ul.insertAdjacentElement('beforeend',li9);
let b= document.querySelector('#answer');
b.addEventListener('click',showSelectResult);
function showSelectResult(){

  let rs=document.querySelector('select#tosi-select');
  let idx=rs.selectedIndex;
  let os=rs.querySelectorAll('option');
  let o=os.item(idx);
  let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+o.id+'.json';
  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish);
  console.log(o.textContent);  
}
function showResult(resp){
  let data=resp.data;
  if(typeof data =='string'){
    data=JSON.parse(data);
  }
li1.textContent='緯度:'+data.coord.lon;
li2.textContent='経度:'+data.coord.lat;
li3.textContent='天気:'+data.weather[0].description;
li4.textContent='最低気温:'+data.main.temp_min;
li5.textContent='最高気温:'+data.main.temp_max;
li6.textContent='湿度:'+data.main.humidity;
li7.textContent='風速:'+data.wind.speed;
li8.textContent='風向:'+data.wind.deg;
li9.textContent='都市名:'+data.name;
ul.insertAdjacentElement('beforeend',li1);
ul.insertAdjacentElement('beforeend',li2);
ul.insertAdjacentElement('beforeend',li3);
ul.insertAdjacentElement('beforeend',li4);
ul.insertAdjacentElement('beforeend',li5);
ul.insertAdjacentElement('beforeend',li6);
ul.insertAdjacentElement('beforeend',li7);
ul.insertAdjacentElement('beforeend',li8);
ul.insertAdjacentElement('beforeend',li9);
}
function showError(err){
  console.log(err);
}
function finish(){
  console.log('Ajax 通信が終わりました');
}