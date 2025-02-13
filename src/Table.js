import React, { Component } from 'react'

export default class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: [
                {name: "Bejo", country: 'Yogyakarta'},
                {name: "Paidi", country: 'Semarang'},
            ]
        };
    }
  render() {
    return (
    <div className="Container">
        <h1>CRUD</h1>
        <table style={{width: "100%", border: '1px solid black' }}>
          <tr>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Kota</th>
          </tr>
          {this.state.newData.map(( item, index ) => {
            return (
                <tr key={index}>
                <td style={{ border: "1px solid black" }}>{item.name}</td>
                <td style={{ border: "1px solid black" }}>{item.country}</td>
                </tr>
            );
            })}
        </table>
      </div>
    )
  }
}
