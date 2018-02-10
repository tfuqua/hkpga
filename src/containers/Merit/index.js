import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StaticMeritView from './StaticMeritView';
import MeritTable from './MeritTable';
import { getMeritByYear } from './actions';
import { getOOMYears } from '../Dashboard/actions';
import Loader from '../../components/Loader';

class Merit extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      year: this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear(),
      years: [2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004]
    };
  }

  componentDidMount() {
    this.props.getMeritByYear(this.state.year.toString());

    this.props.getOOMYears().then(years => {
      this.setState({ years: [...years, ...this.state.years] });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.year !== this.props.match.params.year) {
      this.setState({ year: nextProps.match.params.year });
      this.props.getMeritByYear(nextProps.match.params.year);
    }
  }

  render() {
    let year = this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear();

    return (
      <div className="container-fluid">
        <h2>Order of Merit - {this.state.year}</h2>
        <hr />
        <div className="row">
          <div className="col-sm-9">
            {parseInt(year, 10) > 2013 ? (
              !this.props.isFetching && typeof this.props.merit !== 'undefined' ? (
                <MeritTable merit={this.props.merit} year={year} />
              ) : (
                <Loader />
              )
            ) : (
              <StaticMeritView year={year} lang={this.props.lang} />
            )}
          </div>

          <div className="col-sm-3 ">
            <div className="archives">
              <h3>Tournaments</h3>
              <ul>
                {this.state.years.map((year, i) => (
                  <li key={i}>
                    <Link to={`/merit/${year}`}>{year}</Link>
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
    lang: store.languageReducer.lang,
    merit: store.meritReducer.meritByYear,
    isFetching: store.meritReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMeritByYear, getOOMYears }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Merit);
