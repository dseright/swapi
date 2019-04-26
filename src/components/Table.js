import React, { Component } from 'react';
import TableRow from './TableRow.js'

class Table extends Component {
  render() {
    const data = this.props.data.results;
    const tableLabels = Object.keys(data[0]);
    return (
      <div>
        <table key="table">
          <thead key="head">
            <tr key="headrow">
              {
                tableLabels.map((label, i) => {
                  return <th key={i}>{label}</th>
                })
              }
            </tr>
          </thead>
          <tbody key="tableBody">
          {
            data.map((person, i) => {
              return <TableRow person={person} i={i} key={i} />
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;