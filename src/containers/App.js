import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table'

/* Okay, so I've got pagination working. Now I need to add the ability to change between the different choices (people, vehicles, etc...) and then 
only display the first couple of tidbits on the table, but make it possible to click on the name of the thing in question and bring up a single page for it 
displaying all the info on the database. Then it'll be fully navigatable. Also I need to style it at some point. */

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      next: '',
      prev: ''
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = (data = 'https://swapi.co/api/people/') => {
    fetch(data).then(response => {
      return response.json();
    }).then(response => {
      this.setState({ people: response});
      this.setState({ next: response.next});
      this.setState({ prev: response.previous});
      console.log(response);
    })  
  }

  nextPage = () => {
    this.getData(this.state.next);
  }

  prevPage = () => {
    this.getData(this.state.prev);
  }

  render() {
    const { people } = this.state;
    if (Object.entries(people).length === 0 && people.constructor === Object) {
      return <h1>Loading....</h1>
    } else {
      return (
        <div className="App">
          <Table people={people}/>
          <button onClick={this.prevPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      );
    }
  }
}

export default App;
