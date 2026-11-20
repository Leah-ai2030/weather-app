const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const API_KEY ="7739a1a2555c3dfe020ec06ccd682dab0 ";
searchBtn.addEventListener("click", function(){
    const city = cityInput.value;
    if (city === ""){
        alert("Tafadhali andika jina la mji!");
        return;
    }
    const url ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric';

    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error("Mji haujapatikana!");
        }
        return response.json();
    })
    .then(function(data){
        const temp = data.main.temp;
        const weatherDesc = data.weather[0].description;
        const cityName= data.name;

        weatherResult.innerHTML="";
        const h2 = document.createElement("h2");
        h2.textContent =cityName;
        const pTemp = document.createElement("p");
        pTemp.textContent = "Joto:" + temp +"°C";
        const pDesc = document.createElement("p");
        pDesc.textContent ="Hali:" + weatherDesc;

        weatherResult.appendChild(h2);
        weatherResult.appendChild(pTemp);
        weatherResult.appendChild(pDesc);

    })
    .catch(function(error) {
        weatherResult.innerHTML = "<p style='color: red;'>Kosa: " + error.message + "</p>";
    });
});