var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

var app = express();
var router = express.Router();
var Schema = mongoose.Schema;
var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});






router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/latestLaunch').get(function(req, res) {

    var url = "https://api.spacexdata.com/v2/launches/latest"
    fetch(url).then(function(response) {
      return response.json();      
     }).then(function(json){
        
        var rocket = json.rocket;
        var flightNum = json.flight_number;
        var date = json.launch_date_utc;
        var launchSite = json.launch_site['site_name_long'];
        var missionPatch = json.links['mission_patch'];
        var article = json.links['article_link'];
        var video = json.links['video_link'];
        var details = json.details;

        var resJson = new Object();
        resJson.rocket = rocket;
        resJson.date = date;
        resJson.flight = flightNum;
        resJson.launchSite = launchSite;
        resJson.missionPatch = missionPatch;
        resJson.article = article;
        resJson.video = video;
        resJson.details = details;

        res.send(JSON.stringify(resJson));

     });


 });

router.route('/launches').get(function(req,res){
    var launches = [];
    var url = "https://api.spacexdata.com/v2/launches"
    fetch(url).then(function(response) {
      return response.json();      
     }).then(function(json){
        
    
        for(var i = 0; i < json.length; i++) {

          console.log()
          var rocket = json[i].rocket;
          var flightNum = json[i].flight_number;
          var date = json[i].launch_date_utc;
          var launchSite = json[i].launch_site['site_name_long'];
          var missionPatch = json[i].links['mission_patch'];
          var article = json[i].links['article_link'];
          var video = json[i].links['video_link'];
          var details = json[i].details;
          var success = json[i].launch_success

          if(details === null){
            details = "No details available"
          }

          var resJson = new Object();
          resJson.rocket = rocket;
          resJson.date = date;
          resJson.flight = flightNum;
          resJson.launchSite = launchSite;
          resJson.missionPatch = missionPatch;
          resJson.article = article;
          resJson.video = video;
          resJson.details = details;
          resJson.success = success;

          

          launches.push(resJson);
        }
     
          launches.reverse();

        res.send(JSON.stringify(launches));
     });


});

var db;


function startServer(){
  app.use('/api', router);
  app.listen(port, () => console.log(`Listening on port ${port}`));
}


startServer();