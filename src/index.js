import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Index = props => {
  return (
    <div>
      <App
        name="Minhaj ahmad khan "
        email="minhaj.space@gmail.com"
        address="lucknow"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="Bright Career inter college Lucknow"
        college="Dr.Mc Saxena college  of engg and tech"
        course="B-tech"
        language="Javascript,ReactJS "
        database="My SQL server,MySql"
        operatingSystem="windwos 8,windows10"
        tools=" Visual Studio, SQL Server 2012 "
        ui="HTML,CSS "
        cartificate=""
      />
      {/* <App
        Name="Urooj"
        middelName=""
        lastName="Ahmad"
        city="Lucknow"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="Baby martin"
      />
      <App
        Name="vishal"
        lastName="Anand"
        city="unnao"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="tkic"
      /> */}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
