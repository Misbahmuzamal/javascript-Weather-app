let city=document.querySelector('.city');
let temperature=document.querySelector('.temperature');
let humidity=document.querySelector('.hum h3');
let wind=document.querySelector('.win h3');
let inputCity=document.querySelector('input');
let button=document.querySelector('.btn');
let image=document.querySelector('.detail img')
let detail=document.querySelector('.detail');
button.addEventListener('click',function(){
    let cityName=inputCity.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b73287b9c8a2eb3fc389b7725136702e`)
    .then(function(data){
        return data.json(); 
    })
    .then(function(response){
      if (response.cod === '404') {
        document.querySelector('.error').style.display='block';
        document.querySelector('.hide').style.display='none';
      
     } 
      else{
         console.log(response); 
         console.log(typeof(response));
         console.log(response.name);
         console.log(response.main.temp);
         city.innerHTML=response.name;
         temperature.innerHTML=Math.round(response.main.temp)+`°c`;
         humidity.innerHTML=response.main.humidity+`%`;
         wind.innerHTML=response.wind.speed+` km/h`;
      
           
          if (response.weather[0].main=='Clear'){
             image.src='images/images/clear.png'
         }
          else if(response.weather[0].main=='Clouds'){
             image.src='images/images/clouds.png'
          }
          else if(response.weather[0].main=='Drizzle'){
             image.src='images/images/drizzle.png'
          }
          else if(response.weather[0].main=='Rain'){
             image.src='images/images/rain.png'
          }
          else if(response.weather[0].main=='Snow'){
             image.src='images/images/snow.png'
          }
          else if(response.weather[0].main=='Mist'){
             image.src='images/images/mist.png'
          }
          else if(response.weather[0].main=='Wind'){
             image.src='images/images/wind.png'
          }
          document.querySelector('.hide').style.display='block';
          document.querySelector('.error').style.display='none';
         }
         
      }
        
    )
    .catch(function(error) {
        console.error('Error fetching weather data:', error);
    });
})




