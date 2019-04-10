import React, { Component } from 'react'

class TableRow extends Component {
  render() {
    const person = Object.values(this.props.person);
    return (
      <tr key={this.props.i}>
        {
          person.map((property, i) => {
            if(property.length === 0 ){
              return <td key={i}>None</td>
            } else {
              return (<td key={i}>{property}</td>)
            }
          })
        }
      </tr>
    )
  }
}

export default TableRow