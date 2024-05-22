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

////////// 課題3-2 ここからプログラムを書こう
//緯度
console.log('緯度:'+data.coord.lon);
//経度
console.log('緯度:'+data.coord.lat);
//天気
console.log('天気:'+data.weather[0].description );
//最低気温
console.log('最低気温:'+data.main.temp_min );
//最高気温
console.log('最高気温:'+data.main.temp_max);
//湿度
console.log('湿度:'+data.main.humidity);
//風速
console.log('風速:'+data.wind.speed);
//風向
console.log('風向:'+data.wind.deg);
//都市名
console.log('都市名:'+data.name);