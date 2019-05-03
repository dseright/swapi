import React, { Component } from 'react'

class TableRow extends Component {
  render() {
    const allItem = Object.values(this.props.item);
    const item = allItem.splice(0, 2);
    return(
      <tr key={this.props.i}>
        {
          item.map((item, i) => {
            if (item.length === 0) {
              return <td key={i}>None.</td>
            }
            if (i === 0) {
              return <td key={i}><a href="#" onClick={() => this.props.changeData(this.props.item.url)}>{item}</a></td>
            }
            return <td key={i}>{item}</td>
          })
        }
      </tr>
    )
  }
}

export default TableRow