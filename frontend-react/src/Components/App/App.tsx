import React from 'react';
import './App.css';
import SearchBar from "./SearchBar/SearchBar";
import WeatherBlock from "./WeatherBlock/WeatherBlock";
import {getHourJson} from "../../Data/tommorow.io/API";

function App() {
    const logFun = async () => await getHourJson();
  return (
      <div className={"container"}>
        <div className="App">
            <button onClick={(a) => logFun()}/>
            <SearchBar/>
            <WeatherBlock cityName={"Brno"}/>
        </div>
      </div>
  );
}

export default App;
