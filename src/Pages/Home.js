import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherForm from "../Components/WeatherForm";
import WeatherDisplay from "../Components/WeatherDisplay";
import Header from "../Components/Header";
function Home() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        document.title = "Dashboard"
    }, [])
    const handleWeatherData = (data) => {
        console.log(data);
        setWeatherData(data);
    };
    return (
        <>
            <title>My Blog</title>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <WeatherForm onWeatherData={handleWeatherData} />
                    </Col>
                    <Col md={8}>
                        <WeatherDisplay weatherData={weatherData} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;