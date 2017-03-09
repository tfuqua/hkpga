import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../../../components/Text';
import { getUsers } from './actions';

class Pages extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  render() {
    if (this.props.users){
      return(
        <div className="container">
            <h2>Users</h2>

                <div className="well">
                <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(this.props.users).map((key, i) =>
                        <tr key={i}>
                            <td><Text text={this.props.users[key].name} /></td>
                            <td>{this.props.users[key].email}</td>
                            <td>{this.props.users[key].active ? 'yes' : 'no'}</td>
                            <td></td>
                        </tr>
                      )}
                    </tbody>
                </table>
                </div>
        </div> 
      );

    } else {
      return(<div></div>);
    }           
  }
}

function mapStateToProps(store) {
  return {
      users: store.userReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Pages);