import React from "react";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1> Resume </h1>
      <table className="ui celled table">
        <tr>
          <td>Name : {props.name}</td>
        </tr>
        <tr>
          <td>Address : {props.address}</td>
        </tr>
        <tr>
          <td>Email : {props.email}</td>
        </tr>
        <tr>
          <td>Contact Number : {props.number}</td>
        </tr>
        <th>EDUCATIONAL QUALIFICATIONS </th>
        <tr>
          <tr>
            <th>Course:</th>
            <td>{props.course}</td>
          </tr>
          <tr>
            <th>Year of Passing</th>
            <td>{props.year}</td>
          </tr>
          <tr>
            <th>Passing Percentage </th>

            <td>{props.percentage}</td>
          </tr>
          <tr>
            <th>College/Board </th>

            <td>{props.college}</td>
          </tr>
        </tr>

        <th>TECHNICAL SKILLS </th>
        <tr>
          <th>Language:</th>
          <td>{props.language}</td>
        </tr>
        <tr>
          <th>Database:</th>
          <td>{props.database}</td>
        </tr>
        <tr>
          <th>Operating System:</th>
          <td>{props.operatingSystem}</td>
        </tr>
        <tr>
          <th>Tools:</th>
          <td>{props.tools}</td>
        </tr>
        <tr>
          <th>UI:</th>
          <td>{props.ui}</td>
        </tr>

        <th>CERTIFICATION COURSES </th>
        <tr>
          <td>{props.cartificate}</td>
        </tr>
      </table>
    </div>
  );
};

export default App;
