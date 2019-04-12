import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {}
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = (data = 'people/') => {
    let url = 'https://swapi.co/api/' + data;
    console.log(url);
    fetch(url).then(response => {
      return response.json();
    }).then(response => {
      this.setState({ people: response})
    })
  }

  render() {
    const { people } = this.state;
    if (Object.entries(people).length === 0 && people.constructor === Object) {
      return <h1>Loading....</h1>
    } else {
      return (
        <div className="App">
          <Table people={people}/>
        </div>
      );
    }
  }
}

export default App;
