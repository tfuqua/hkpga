import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../Users/actions';
import Loader from '../../components/Loader';
import Text from '../../components/Text';

class ProView extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
  }

  render() {
    if (this.props.user) {
      return (
        <div className="container-fluid">
          <h2>PROFESSIONALS PROFILE</h2>

          {this.props.user.profile_picture
            ? <img
                className="profile-pic img-responsive img-rounded"
                src={this.props.user.profile_picture}
                alt={this.props.user.name.en}
              />
            : null}

          {/***** Name *****/}
          <h3><Text text={this.props.user.name} /></h3>

          {/***** Intro *****/}
          {this.props.user.introduction.en !== ''
            ? <div>Intro<Text text={this.props.user.introduction} /><br /></div>
            : null}

          {/***** Qualifications *****/}
          {this.props.user.qualifications.en !== ''
            ? <div>Qualifications <Text text={this.props.user.qualifications} /><br /></div>
            : null}

          {/***** Pro Since *****/}
          {this.props.user.pro_since ? <div>Year Since: {this.props.user.pro_since}<br /></div> : null}

          {/***** Achievements *****/}
          {this.props.user.achievements.en !== ''
            ? <div>Achievements <Text text={this.props.user.achievements} /><br /></div>
            : null}

          {/***** Teaching Experience *****/}
          {this.props.user.teaching_experience.en !== ''
            ? <div>Teaching Experience <Text text={this.props.user.teaching_experience} /><br /></div>
            : null}

          {/***** Member Since *****/}
          {this.props.user.member_since ? <div>Member Since: {this.props.user.member_since}<br /></div> : null}

          {/***** Email *****/}
          {this.props.user.email
            ? <div>Email: <a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a><br /></div>
            : null}

          {/***** Phone *****/}
          {this.props.user.phone
            ? <div>Phone: <a href={`phone:${this.props.user.phone}`}>{this.props.user.phone}</a><br /></div>
            : null}

        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    user: store.userReducer.user,
    isFetching: store.userReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProView);
