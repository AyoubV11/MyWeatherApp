const APIKEY = 'API key'




let apiCall = function(City){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then( response => 
        response.json().then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = "<i class='fa-solid fa-city'></i>" + data.name;
            document.querySelector('#temp').innerHTML =  "<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°';
            document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-water'></i>" + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML =  "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
    })
);

}
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let city = document.querySelector('#inputCity').value;

    apiCall(city);
});

apiCall("Paris");