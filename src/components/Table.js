import React, { Component } from 'react';
import TableRow from './TableRow.js'

class Table extends Component {
  render() {
    const data = this.props.data.results;
    const allTableLabels = Object.keys(data[0]);
    const tableLabels = allTableLabels.slice(0, 2);
    return (
      <div>
        <table className='center' key="table">
          <thead key="head">
            <tr key="headrow">
              {
                tableLabels.map((label, i) => {
                  return <th className='capitalize' key={i}>{this.props.formatUnderscores(label)}</th>
                })
              }
            </tr>
          </thead>
          <tbody key="tableBody">
          {
            data.map((item, i) => {
              return <TableRow item={item} i={i} key={i} changeData={this.props.changeData}/>
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;