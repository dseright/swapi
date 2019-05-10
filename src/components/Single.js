import React, { Component } from 'react';

class Single extends Component {
  
  render() {
    const data = Object.entries(this.props.data);
    const changeData = this.props.changeData;
    return(
        data.map(([key, value], i) => {
          let newValue = [];
          if (Array.isArray(value)) {
            value.forEach((link, j) => {
<<<<<<< HEAD
              newValue.push(<button key ={j} onClick={() => changeData(link)}>{link}</button>)
=======
              newValue.push(<button key={j} onClick={() => changeData(link)}>{link}</button> );
>>>>>>> 9ce8801d61515acf78ee34422253c81a6ca39fe5
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