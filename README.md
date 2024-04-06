# Getting Started with Weather Dashboard - React.js Project

This project is a simple weather dashboard application built using React.js. It allows users to input a city name, fetch weather information for that city using the OpenWeatherMap API, and display the results.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine.
- An OpenWeatherMap API key. You can obtain one by signing up at [OpenWeatherMap](https://openweathermap.org/) and generating an API key.

## Getting Started

To set up the project, follow these steps:
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/rinkumahawar/weather-dashboard-reactjs.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-dashboard-reactjs
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. chnage api key in  config.js file in the src/config directory of the project and add your OpenWeatherMap API key:
    ```bash
    API_KEY=your-api-key
    ```
    Replace `your-api-key` with your actual OpenWeatherMap API key.
5. Start the development server:
    ```bash
    npm start
    ```
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the Weather Dashboard application.

## Usage

- Enter the name of the city in the input field.
- Click the "Search" button to fetch weather data for the specified city.
- The weather details including city name, temperature, weather description, wind speed, and humidity will be displayed.
- If the city is not found or there is an error in fetching the data, an error message will be displayed.

## License

This project is licensed under the [MIT License](LICENSE).
