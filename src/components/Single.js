import React, { Component } from 'react';

class Single extends Component {
  
  render() {
    const data = Object.entries(this.props.data);
    const changeData = this.props.changeData;
    console.log(data);
    return(
        data.map(([key, value], i) => {
          let newValue = [];
          if (Array.isArray(value)) {
            value.forEach((link, j) => {
              newValue.push(<button key ={j} onClick={() => changeData(link)}>{link}</button>)
            })
          } else if ((typeof value === 'string' || value instanceof String) && value.startsWith('https')) {
            newValue.push(<button key={i} onClick={() => changeData(value)}>{value}</button>);
          } else {
            newValue.push(value);
          }
          console.log(newValue);
          return <p key={i}>{key}: {newValue}</p>
      })
    )
  }
}


export default Single;