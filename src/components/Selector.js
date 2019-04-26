import React, { Component } from 'react';

class Selector extends Component {
  render() {
    const roots = this.props.roots;
    console.log(roots);
    return (
      <div>
        {
          Object.entries(roots).map(([resource, link], i) => {
            return <button name={resource} key={i} onClick={() => this.props.changeData(link)}>{resource}</button>
          })
        }
      </div>
    )
  }
}

export default Selector;