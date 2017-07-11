import React, { Component } from 'react';
import './TravelTable.css';
import { Table } from 'react-bootstrap';

class TravelTable extends Component {
  render() {
    return (
      <div id="travelTable">
        <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Destination</th>
        <th>Capital</th>
        <th>Official Language</th>
        <th>Population (aprox.)</th>
        <th>National Bird</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Spain</td>
        <td>Madrid</td>
        <td>Spanish</td>
        <td>46.77 million</td>
        <td>Eagle</td>
      </tr>
      <tr>
        <td>Italy</td>
        <td>Rome</td>
        <td>Italian</td>
        <td>59.83 million</td>
        <td>Bluebirds</td>
      </tr>
      <tr>
        <td>Aruba</td>
        <td>Oranjestad</td>
        <td>Dutch</td>
        <td>102,911</td>
        <td>Aruban Owl</td>
      </tr>
      <tr>
        <td>Chile</td>
        <td>Santiago</td>
        <td>Spanish</td>
        <td>17 million</td>
        <td>Ugly Condor</td>
      </tr>
    </tbody>
  </Table>
      </div>
    );
  }
}

export default TravelTable;