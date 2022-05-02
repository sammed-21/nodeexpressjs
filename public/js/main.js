const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');
const temp_real_value=document.getElementById("temp_real_value");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === '') {
    city_name.innerText = "please give name of city";
    datahide.classList.add('data_hide');
  } 
   else {

    try {
      let url =
            `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=78feb82a5c02c870681f0682f697ed15&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData=[data];
    //   const data=response.json();
    //    console.log('hi')
    city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
    console.log(data);
    temp_real_value.innerText=arrData[0].main.temp;
    const temp_mood=arrData[0].weather[0].main;
    if(temp_mood=="Sunny"){
      temp_status.innerHTML=" <i class='fas fa-sun' style='color: #eccc68'></i>";
    }
    else if(temp_mood=="Clouds"){
      temp_status.innerHTML=" <i class='fas fa-cloud' style='color: #eccc68'></i>";
    }
    else if(temp_mood=="Rainy"){
      temp_status.innerHTML=" <i class='fas fa-rain' style='color: #eccc68'></i>";
    }
    else{
      temp_status.innerHTML=" <i class='fas fa-cloud' style='color: #fff'></i>";
    }
    datahide.classList.remove('data_hide');

       
    } catch (e) {
      city_name.innerText = "please enter the city name properly";
      datahide.classList.add('data_hide');

    }
  }
};
submitBtn.addEventListener("click", getInfo);
