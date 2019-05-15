import React, { Component } from 'react';

class Selector extends Component {

  changeActive = (tab) => {
    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById(tab).classList.add('active');
  }

  componentDidMount() {
    document.getElementById('people').classList.add('active');
  }

  render() {
    const roots = this.props.roots;
    return (
      <div className='nav nav-tabs justify-content-center'>
        {
          Object.entries(roots).map(([resource, link], i) => {
            return <button className='capitalize nav-item nav-link' id={resource} key={i} onClick={() => {
              this.props.changeData(link);
              this.changeActive(resource);
            }
            }>{resource}</button>
          })
        }
      </div>
    )
  }
}

export default Selector;