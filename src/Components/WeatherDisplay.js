import { Card } from "react-bootstrap";

const WeatherDisplay = ({ weatherData }) => {
    return (
        <Card>
            <Card.Header>
                {weatherData ? (
                    <h4>{weatherData?.name},  {weatherData?.sys?.country}</h4>
                ) : (
                    <h4>______,_________</h4>
                )}
                
            </Card.Header>
            <Card.Body>
                    <Card.Title>
                        {weatherData ? (
                            <>
                                {weatherData.name} {new Date().toLocaleDateString()} Weather
                            </>
                        ) : (
                            "______,_________ Weather"
                        )}
                    </Card.Title>
                    <Card.Text>
                        Temperature {weatherData?.main?.temp ?? "__"}°C
                    </Card.Text>
                    <Card.Text>
                        Weather Description: {weatherData?.weather[0]?.description}
                    </Card.Text>
                    <Card.Text>
                        Wind Speed: {weatherData?.wind?.speed ?? "__"} m/s
                    </Card.Text>
                    <Card.Text>
                        Humidity: {weatherData?.main?.humidity ?? "__"}%
                    </Card.Text>
            </Card.Body>
        </Card>
    );
  };
  
  export default WeatherDisplay;