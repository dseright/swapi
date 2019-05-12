import React, { Component } from 'react';

class Selector extends Component {
  render() {
    const roots = this.props.roots;
    return (
      <div>
        {
          Object.entries(roots).map(([resource, link], i) => {
            return <button className='capitalize' name={resource} key={i} onClick={() => this.props.changeData(link)}>{resource}</button>
          })
        }
      </div>
    )
  }
}

export default Selector;