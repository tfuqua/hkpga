import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Text from '../../components/Text';
import { getTournament } from './actions';

class EditTournament extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  
  componentDidMount(){
    this.props.getTournament(this.props.match.params.key);
  }

  render() {
      if (this.props.tournament){
        return (
            <div className="container">
                <h2>Edit Tournament</h2>
                <div className="well">
                    <pre>
                    {JSON.stringify(this.props.tournament, null, ' ')}
                    </pre>
                </div>
            </div>
        )
      } else {
        return( <Loader/> ); 
      }   
  }
}

function mapStateToProps(store) {
  return {
      tournament: store.tournamentReducer.tournament,
      isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTournament }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(EditTournament);