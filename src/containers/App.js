import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table'
import Selector from '../components/Selector'
import Single from '../components/Single'

/* Okay, so I've got the ability to change between the different choices (people, vehicles, etc...). Now I need to 
only display the first couple of tidbits on the table, but make it possible to click on the name of the thing in question and bring up a single page for it 
displaying all the info on the database. Then it'll be fully navigatable. Also I need to style it at some point. */

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      next: '',
      prev: '',
      roots: {}
    }
  }

  componentDidMount() {
    this.getRoots();
    this.getData();
  }

  getRoots = () => {
    fetch('https://swapi.co/api/').then(response => {
      return response.json();
    }).then(response => {
      this.setState({ roots: response });
    })
  }

  getData = (url = 'https://swapi.co/api/people/') => {
    fetch(url).then(response => {
      return response.json();
    }).then(response => {
      this.setState({ data: response, next: response.next, prev: response.previous });
    })  
    
  }

  nextPage = () => {
    this.getData(this.state.next);
  }

  prevPage = () => {
    this.getData(this.state.prev);
  }

  tableOrSingle = (dataObj) => {
    if (Array.isArray(this.state.data.results)) {
      if (this.state.data.results.length > 1) {
        return <Table data={dataObj} changeData={this.getData}/>
      }
    } else {
      return <Single data={dataObj}/>
    }
  }

  render() {
    const { data } = this.state;
    if (Object.entries(data).length === 0 && data.constructor === Object) {
      return <h1>Loading....</h1>
    } else {
      return (
        <div className="App">
          <Selector changeData={this.getData} roots={this.state.roots}/>
          {this.tableOrSingle(data)}
          <button onClick={this.prevPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      );
    }
  }
}

export default App;
