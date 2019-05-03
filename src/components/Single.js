import React, { Component } from 'react';

class Single extends Component {
  
  render() {
    const data = this.props.data;
    return <p>{data.name}</p>
  }
}


export default Single;