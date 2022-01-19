import React from 'react';
import './style.css';

export default class App extends React.Component {
  state = {
    data: null,
  };

  constructor() {
    super();
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=DOp3CbxmXDZmkcz1asaZFe2FUTE5L8hL6clHZjFe',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => {
      res.json().then((result) => this.setState({ data: result }));
    });
  }

  render() {
    let date;
    if (this.state.data) {
      date = new Date(this.state.data.date);
    }
    return (
      <div>
        {this.state.data && (
          <div>
            <h1>{this.state.data.title}</h1>
            <p>{this.state.data.explanation}</p>
            <p>
              Date: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </p>
            <img src={this.state.data.url}></img>
          </div>
        )}
      </div>
    );
  }
}
