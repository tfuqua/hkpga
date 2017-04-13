import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { meritYears } from '../../util/data';

class Merit extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Order of Merit</h2>

        <hr />
        <div className="row">
          <div className="col-sm-9" />
          <div className="col-sm-3 ">
            <div className="archives">
              <h3>Tournaments</h3>
              <ul>
                {meritYears.map((year, i) => (
                  <li key={i}>
                    <Link to={`/merit/${year.value}`}>{year.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Merit;
