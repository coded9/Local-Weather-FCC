$(document).ready(function(){
  var yourLoc;
  getLocation();
 
  function getLocation(){
    $.get("http://ipinfo.io", function(response) {
    yourLocation = response.city+','+response.region ;
      
      $.ajax({
      type:"GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+yourLocation+"&appid=2de143494c0b295cca9337e1e96b00e0&units=metric",
    dataType: 'jsonp',
    success: function(results){
      console.log('success',results);
      currWeath = results.name +'-'+results.sys.country+'<br><br>'+'Temperature in Celsius: '+results.main.temp+'&deg;C'+'<br><br>'+results.weather[0].description;
      $("#currWeather").html(currWeath);
  }
    });
      
       $("#yourcity").text("Hello visitor from "+yourLocation);
}, "jsonp");
    
  }
           
  $(".sub").click(function(){
    /*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=2de143494c0b295cca9337e1e96b00e0", function(json) {
         console.log(json);
    });*/
    var loc = $("#cityname").val();
    $("#weatherr").text("Loadinggg...");
    $.ajax({
      type:"GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=2de143494c0b295cca9337e1e96b00e0&units=metric",
    dataType: 'jsonp',
    success: function(results){
      console.log('success',results);
      weather = results.name +'-'+results.sys.country+'<br><br>'+'Temperature in Celsius: '+results.main.temp+'&deg;C'+'<br><br>'+results.weather[0].description;
    $("#weatherr").html(weather);
    }
      });
  });
});
