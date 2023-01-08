var request = require('request');
var geoUrl = 'https://restapi.amap.com/v3/geocode/geo'
var regeoUrl = 'https://restapi.amap.com/v3/geocode/regeo'
var placeUrl = 'https://restapi.amap.com/v3/place/text'
var key = '924b91968e033d46ec03e3897902a6f0'
var cityCode = '010'


var geoParameters = {
    'key': key,
    'address': '',
    'city': cityCode,
    'batch': false,
    'output': 'json'
}

// request({url:geoUrl, qs:geoParameters}, function(err, response, body) {
//     if(err) { console.log(err); return; }
//     console.log("Get response: " + response.statusCode);
//     console.log(response)
//     console.log(body)
//   });


  
var regeoParameters = {
    'key': key,
    'location': '116.413938,39.925964',
    'poitype': '140400',
    'radius': 1000,
    'extensions': 'all',
    'batch': false,
    'roadlevel':0,
    'output': 'json',
}

// 050200 西餐
// 080304 酒吧
// request({url:regeoUrl, qs:regeoParameters}, function(err, response, body) {
//     if(err) { console.log(err); return; }
//     console.log("Get response: " + response.statusCode);
//     console.log(response)
//     console.log(body)
//     });



  
var placeParameters = {
    'key': key,
    'keywords': 'Modernista宝钞胡同44号',
    'city': cityCode,
    'citylimit': true,
    'output': 'json',
}


request({url:placeUrl, qs:placeParameters}, function(err, response, body) {
    if(err) { console.log(err); return; }
    // console.log("Get response: " + response.statusCode);
    console.log(response)
    console.log(body["pois"])
    
});
