import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiveUser } from '../Users/actions';
import { Link } from 'react-router-dom';

class CommitteeRow extends Component {
  render() {
    if (this.props.committee) {
      return (
        <div>
          <dt>{this.props.position}</dt>
          {this.props.committee.map((user, i) => (
            <dd key={i}>
              <Link onClick={() => this.props.receiveUser(user)} to={`/pros/${user.username}`}>{user.name.en}</Link>
            </dd>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommitteeRow);
