import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Text from '../../components/Text';
import { connect } from 'react-redux';
import { getTournaments } from './actions';
import Archives from '../Archives';
import Loader from '../../components/Loader';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        year: (this.props.match.params.year) ? this.props.match.params.year : 2017
    }
  }

  componentDidMount(){
    if (this.props.tournaments === undefined)
      this.props.getTournaments(this.state.year);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.year !== this.state.year){
        this.setState({year: nextProps.match.params.year});
        this.props.getTournaments(nextProps.match.params.year);    
    }
  }

  render() {

      if (this.props.tournaments){
          return(
            <div className="container" id="contact-page">
                <h2>Tournaments</h2>
                <div className="row">
                    <div className="col-md-4 pull-right">
                        <Archives type={'tournaments'} link={'/tournaments/'} />
                    </div>
                    <div className="contact col-md-8">
                        { (!this.props.isFetching) ?
                            <div className="well">
                                <ul>
                                    {Object.keys(this.props.tournaments).map((key, i) =>
                                        <li key={i}><Text text={this.props.tournaments[key].name} /></li>
                                    )}
                                </ul>
                            </div>                       
                            :
                            <Loader />   
                        }
                    </div>
                </div>
            </div>              
          );
      } else {
          return (<div></div>);
      }
  }
}

Tournaments.need = [(params) => {
  return getTournaments();
}];


function mapStateToProps(store) {
  return {
      tournaments: store.tournamentReducer.tournaments,
      isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournaments }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);