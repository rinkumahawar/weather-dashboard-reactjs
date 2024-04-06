import { apiUrl, API_KEY } from "../Config/config";

const getWeatherData = async (city, lat=null, long=null) => {
  try {
    let fullurl = null;
    if(lat && long){
        fullurl = `${apiUrl}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    }else{
        if(city != ""){
            fullurl = `${apiUrl}?q=${city}&appid=${API_KEY}&units=metric`
        }else{
            throw new Error('Please enter city name');
        }
    }
    const response = await fetch(fullurl);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const weatherService = {
    getWeatherData
};
