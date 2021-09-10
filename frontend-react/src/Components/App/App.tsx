import React from 'react';
import './App.css';
import SearchBar from "./SearchBar/SearchBar";
import WeatherBlock from "./WeatherBlock/WeatherBlock";

function App() {
  return (
      <div className={"container"}>
        <div className="App">
            <SearchBar/>
            <WeatherBlock cityName={"Brno"}/>
        </div>
      </div>
  );
}

export default App;
