import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiveUser } from '../Users/actions';
import { Link } from 'react-router-dom';
import translations from '../../util/translations';
import Text from '../../components/Text';

class HonoraryRow extends Component {
  render() {
    if (this.props.honorary) {
      return (
        <div>
          <dt><h3>{translations[this.props.lang][this.props.position]}</h3></dt>
          <dd>
            {this.props.honorary.map((user, i) => (
              <div key={i}>
                <Link onClick={() => this.props.receiveUser(user)} to={`/pros/${user.username}`}>
                  <Text text={user.name} />
                </Link>
              </div>
            ))}
          </dd>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HonoraryRow);
