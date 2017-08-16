import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeritTable extends Component {
  render() {
    let merit = this.props.data ? this.props.data.slice(1, 6) : null;

    return merit
      ? <div>
          <h3 style={{ textTransform: 'capitalize' }}>
            {this.props.division} Division
          </h3>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>
                  {this.props.data[0][0]}
                </th>
                <th>
                  {this.props.data[0][1]}
                </th>
                <th>
                  {this.props.data[0][this.props.data[0].length - 1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {merit.map((row, i) =>
                <tr key={i}>
                  <td>
                    {row[0]}
                  </td>
                  <td>
                    {row[1]}
                  </td>
                  <td>
                    {row[row.length - 1]}
                  </td>
                </tr>
              )}
              <tr className="text-center">
                <td colSpan="100%" style={{ padding: '5px' }}>
                  <Link to="/merit" className="btn btn-success">
                    See Full List
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      : null;
  }
}

export default MeritTable;
