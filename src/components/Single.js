import React, { Component } from 'react';

class Single extends Component {
  
  render() {
    const data = Object.entries(this.props.data);
    const changeData = this.props.changeData;
    console.log(data);
    return(
        data.map(([key, value], i) => {
          let newValue = '';
          if ((typeof value === 'string' || value instanceof String) && value.startsWith('https')) {
            newValue = <button onClick={() => changeData(value)}>{value}</button>;
          } else {
            newValue = value;
          }
          return <p key={i}>{key}: {newValue}</p>
      })
    )
  }
}


export default Single;