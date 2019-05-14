import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table'
import Selector from '../components/Selector'
import Single from '../components/Single'

/* Okay, so I've got the ability to change between the different choices (people, vehicles, etc...). Now I need to 
only display the first couple of tidbits on the table, but make it possible to click on the name of the thing in question.
Okay that's done, now I need to display the info in the object. That should be relative easy. Need to make sure I make the links clickable.
Then it'll be fully navigatable. 
We have achieve full navigability. Also I need to style it at some point. */

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

  addButton = (title, stateLink) => {
    if (stateLink) {
      return <button key={title} onClick={() => this.changePage(stateLink)}>{title}</button>
    }
  }

  changePage = (stateLink) => {
    this.getData(stateLink);
  }

  tableOrSingle = (dataObj) => {
    if (Array.isArray(this.state.data.results)) {
      if (this.state.data.results.length > 1) {
        return <Table data={dataObj} changeData={this.getData} formatUnderscores={this.formatUnderscores}/>
      }
    } else {
      return <Single data={dataObj} changeData={this.getData} formatUnderscores={this.formatUnderscores}/>
    }
  }

  formatUnderscores = (text) => {
    return text.replace(/_/g, " ");
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
          {this.addButton('Previous', this.state.prev)}
          {this.addButton('Next', this.state.next)}
        </div>
      );
    }
  }
}

export default App;
