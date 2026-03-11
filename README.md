# Weather Dashboard App

## Overview

The Weather Dashboard App is a web application that allows users to search for cities and view real-time weather information. The application retrieves weather data from the **OpenWeather API** and displays key weather conditions such as temperature, humidity, wind speed, and weather description.

The application is built using **HTML, CSS, and JavaScript** and demonstrates how to integrate external APIs into a front-end web application. It also shows how to structure a multi-page web application and manage data between pages using `localStorage`.

This project was developed as part of a front-end development learning process and focuses on API integration, DOM manipulation, and clean project structure.

---

# Project Objectives

The main goals of this project were to:

* Build a functional weather dashboard using vanilla JavaScript
* Practice working with REST APIs
* Learn how to structure a multi-page web application
* Implement user interaction through forms and buttons
* Display dynamic data on the webpage
* Handle errors such as invalid city names

---

# Features

The Weather Dashboard App includes the following features:

### City Search

Users can enter the name of a city to retrieve weather information.

### Current Weather Display

The dashboard displays:

* City name
* Current temperature
* Weather description
* Humidity
* Wind speed

### Detailed City Weather Page

A separate page displays more detailed information for the selected city.

### Page Navigation

The application is divided into three pages:

* Landing Page
* Dashboard Page
* City Details Page

### Data Persistence

The city selected by the user is stored using `localStorage` so that it can be accessed across different pages.

### API Integration

Weather data is fetched from the **OpenWeather API using the Fetch API.

---

# Project Structure

The project follows a clean folder structure to keep files organized.

```
weather-dashboard
│
├── landing.html
├── dashboard.html
├── city.html
│
├── css
│   ├── landing.css
│   ├── dashboard.css
│   └── city.css
│
├── js
│   ├── landing.js
│   ├── dashboard.js
│   └── city.js
│
└── README.md
```

### Explanation of Structure

**HTML files**

* Define the layout and structure of each page.

**CSS folder**

* Contains styling files for each page.

**JavaScript folder**

* Contains the logic for user interactions and API communication.

---

# Pages Explanation

## Landing Page

The landing page allows the user to search for a city.

Main responsibilities:

* Accept user input
* Save the city name in `localStorage`
* Redirect the user to the dashboard page

---

## Dashboard Page

The dashboard page displays the current weather for the selected city.

Main responsibilities:

* Retrieve the city name from `localStorage`
* Fetch weather data from the API
* Display temperature, humidity, wind speed, and weather description
* Allow the user to refresh weather data
* Navigate to the detailed city page

---

## City Page

The city page displays more detailed weather information.

Main responsibilities:

* Retrieve the selected city from `localStorage`
* Fetch detailed weather information from the API
* Display additional weather statistics

---

# Technologies Used

The application was built using the following technologies:

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Local Storage

Weather data is provided by the **OpenWeather API.

---

# How the API Works

The application sends HTTP requests to the OpenWeather API.

Example API endpoint used:

```
https://api.openweathermap.org/data/2.5/weather
```

Parameters used:

| Parameter | Description  |
| --------- | ------------ |
| q         | City name    |
| units     | Metric units |
| appid     | API key      |

Example request:

```
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```

The API returns weather data in JSON format, which is then displayed on the webpage.

---

# Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Markhams-369/weather-dashboard.git
```

### 2. Navigate to the project folder

```bash
cd weather-dashboard
```

### 3. Open the project

Open `landing.html` in your browser.

You can also run the project using a local development server such as:

* Live Server (VS Code extension)

---

# API Key Setup

To use the application, you need a weather API key.

### Steps

1. Create an account on **OpenWeather**
2. Generate an API key
3. Replace this line in the JavaScript files:

```javascript
const apiKey = "0aad784d564c0bed571f842798a8cd74"";
```

with your actual API key.

Example:

```javascript
const apiKey = "abc123456789";
```

---

# Error Handling

The application handles some common errors such as:

* Empty search input
* Invalid city names
* Failed API responses

These errors are handled using conditional checks and JavaScript `try/catch` blocks.

---

# Learning Outcomes

Through this project the following concepts were practiced:

* Fetching data from external APIs
* Handling JSON responses
* DOM manipulation
* Event handling
* Page navigation
* Local storage usage
* Organizing a front-end project

---

# Author

Boitumelo Senosha
Frontend Developer Student
