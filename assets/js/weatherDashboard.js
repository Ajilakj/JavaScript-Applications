//variables
var ApiKey="fb63e6c2bdd7b63a68498ad2e6e8dcb8";
var previousCity=[];
var city;
var searchCity;
var previous=[];
var latitude;
var longitude;
var queryURL;
var queryUrlFive;
var searchBtn=document.getElementById("searchBtn");




//to get city name from user  
searchBtn.addEventListener("click", function(){
     searchCity=document.getElementById("search").value;
     previousCity.push(searchCity);
     localStorage.setItem("previousCity",previousCity);
     // to create buttons and append
     var buttonTag = document.createElement("button");
     const textForBtn = document.createTextNode(searchCity);
     buttonTag.appendChild(textForBtn);
     document.getElementById("button").appendChild(buttonTag);
     cityWeather(searchCity);   
});


// event handler for buttons
button.addEventListener("click", function(event){
     searchCity=event.target.textContent;
     cityWeather(searchCity);    
});


// function to get current weather and next 5 day
function cityWeather(searchCity){
     document.getElementById("city").textContent=searchCity;
     queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=" + ApiKey;

     //to get data for a particular city
     fetch(queryURL)
     .then(function (response) {
          return response.json();
     })
     .then(function (data) {
          document.getElementById("city-temp").textContent=data.main.temp+" F";
          document.getElementById("city-wind").textContent=data.wind.speed+" MPH";
          document.getElementById("city-humidity").textContent=data.main.humidity+" %";
          latitude=data.coord.lat;
          longitude=data.coord.lon;
          var icon=data.weather[0].icon;
          var imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
          document.getElementById("icon").setAttribute("src",imgUrl);

          //to get data for 5 days for that particular city
          queryUrlFive="https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + ApiKey;
          fetch(queryUrlFive)
          .then(function (response) {
               return response.json();
          })
          .then(function (dataSet) {
               var c=1;
               for (var i = 0; i <=dataSet.cnt; i+=9) {
                    var date=(dataSet.list[i].dt_txt).split(" ");
                    document.getElementById("date"+c).textContent=date[0];
                    var icon=dataSet.list[i].weather[0].icon;
                    var imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.getElementById("icon"+c).setAttribute("src",imgUrl);
                    //document.getElementById("icon"+c).textContent=dataSet.list[i].weather.description;
                    document.getElementById("temp"+c).textContent=dataSet.list[i].main.temp+" F";
                    document.getElementById("wind"+c).textContent=dataSet.list[i].wind.speed+" MPH";
                    document.getElementById("humidity"+c).textContent=dataSet.list[i].main.humidity+" %";
                    c++;
               }
          });
     });
}