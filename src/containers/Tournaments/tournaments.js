import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Text from '../../components/Text';
import { getAllTournaments, deleteTournament } from './actions';

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount(){
    this.props.getAllTournaments();
  }

  handleDelete(id){
    this.props.deleteTournament(id);
  }

  render() {
    if (this.props.tournaments){
      return(
        <div className="container">
            <h2>Tournaments</h2>
            { (!this.props.isFetching) ?
                <div className="well">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(this.props.tournaments).map((key, i) =>
                        <tr key={i}>
                          <td><Text text={this.props.tournaments[key].name} /></td>
                          <td>{this.props.tournaments[key].year}</td>
                          <td>
                            <div className="btn-group">
                              <Link to={`/admin/tournaments/${key}`} className="btn btn-default">Edit</Link>
                              <button onClick={this.handleDelete.bind(this, key)} className="btn btn-default">Delete</button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>                       
                :
                <Loader />   
            }            
        </div> 
      );

    } else {
      return(<div></div>);
    }           
  }
}

function mapStateToProps(store) {
  return {
      tournaments: store.tournamentReducer.tournaments,
      isFetching: store.tournamentReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTournament, getAllTournaments }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);