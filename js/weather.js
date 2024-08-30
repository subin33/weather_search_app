// api key는 변함이 없을 것이기 때문에 대문자 컨벤션(Capitalization Convention)을 사용 
const API_KEY ="b61b5194956c8b1e8a2f53bcbc386beb";
const fellLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span")
const weatherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info");

weatherSelect.addEventListener("change",(e) => {
  getWeater(e.target.value)
})

const getWeater = async (city='seoul')=> {
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await axios.get(url);

  //다음과 같이 사용하는 것을 디스트럭처링 할당 이라고 한다. 
  //디스트럭처링(Destructuring = 구조 분해) 할당은 배열이나 객체의 값을 쉽게 추출하여 변수에 할당할 수 있도록하는 javascript 문법이다. 
  const { name, main ,weather, wind } = response.data;
  locationDisplay.innerText  = name;
  temperatureDisplay.innerText = transferTemperature(main.temp);
  weatherDisplay.setAttribute('src',`http://openweathermap.org/img/wn/${weather[0].icon}.png`);
  windDisplay.innerText = wind.speed;
  fellLikeDisplay.innerText = transferTemperature(main.feels_like);
}
//온도 변환
const transferTemperature =(temp)=> {
  // toFixed 는 소숫점 1자리 까지만 
  return (temp-273.15).toFixed(1);
}
getWeater();