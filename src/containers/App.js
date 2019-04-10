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
    fetch('https://swapi.co/api/people/').then(response=> {
      console.log(response);
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
