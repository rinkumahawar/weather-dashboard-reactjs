import { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function Home() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = '465563e094d46980d58eb7cb8d72cabc'; // Replace with your OpenWeatherMap API key

    const fetchWeatherData = async () => {
        if(city != ""){
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                    const data = await response.json();
                    if (response.ok) {
                        setWeatherData(data);
                        setError(null);
                    } else {
                        setError(data.message);
                        setWeatherData(null);
                    }
                } catch (error) {
                console.error('Error fetching weather data:', error);
                setError('Error fetching weather data. Please try again later.');
            }
        }else{
            setError('Please enter city name.');
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
        <>
            <Navbar expand="lg" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Weather Dashboard</Navbar.Brand>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <h4>Enter a City Name</h4>
                                <Form.Control 
                                    size="lg" type="text" value={city} 
                                    placeholder="E.g. Delhi, Landon, New York"
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
                    </Col>
                    <Col md={8}>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;