import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StaticMeritView from './StaticMeritView';
import MeritTable from './MeritTable';
import { meritYears } from '../../util/data';

class Merit extends Component {
  render() {
    let year = this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear();

    return (
      <div className="container-fluid">
        <h2>Order of Merit - {year}</h2>
        <hr />
        <div className="row">

          <div className="col-sm-9">
            {parseInt(year, 10) > 2013
              ? <MeritTable year={year} />
              : <StaticMeritView year={year} lang={this.props.lang} />}
          </div>

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

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps)(Merit);
