import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { weatherService } from "../Services/weather.service";

const WeatherForm = ({ onWeatherData }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          }, (error) => {
            console.log('Error fetching location: ' + error.message);
          });
    }, []);
    
    const fetchWeatherData = async (lat, long) => {
        try {
            const data = await weatherService.getWeatherData(city, lat, long);
            onWeatherData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            onWeatherData(null);
        }
    };

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h4>Enter a City Name</h4>
                <Form.Control 
                    size="lg" type="text" value={city} 
                    placeholder="E.g. Delhi, London, New York"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                    Search
                </Button>
            </div>
            {error && (
                <div className="mt-2">
                    <Alert key='danger' variant='danger'>
                        {error}
                    </Alert>
                </div>
            )}
        </Form>
    );
}

export default WeatherForm;
