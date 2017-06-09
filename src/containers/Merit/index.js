import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StaticMeritView from './StaticMeritView';
import MeritTable from './MeritTable';
import { getMeritByYear } from './actions';
import { meritYears } from '../../util/data';
import Loader from '../../components/Loader';

class Merit extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      year: this.props.match.params.year ? this.props.match.params.year : new Date().getFullYear()
    };
  }

  componentDidMount() {
    this.props.getMeritByYear(this.state.year.toString());
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
            {parseInt(year, 10) > 2013
              ? !this.props.isFetching && typeof this.props.merit !== 'undefined'
                ? <MeritTable merit={this.props.merit} year={year} />
                : <Loader />
              : <StaticMeritView year={year} lang={this.props.lang} />}
          </div>

          <div className="col-sm-3 ">
            <div className="archives">
              <h3>Tournaments</h3>
              <ul>
                {meritYears.map((year, i) =>
                  <li key={i}>
                    <Link to={`/merit/${year.value}`}>{year.value}</Link>
                  </li>
                )}
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
  return bindActionCreators({ getMeritByYear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Merit);
