import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mapObjectToArray } from '../../util/util';
import { FormattedDate } from 'react-intl';
import Loader from '../../components/Loader';
import { getFeedback, deleteFeedback } from './actions';

class Feedback extends Component {
  componentDidMount() {
    this.props.getFeedback();
  }

  render() {
    if (!this.props.isFetching && typeof this.props.feedback !== 'undefined') {
      let feedbackList = mapObjectToArray(this.props.feedback);

      return (
        <div className="">
          <h3>Messages</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Feedback</th>
                <th>Date</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((feedback, i) => (
                <tr>
                  <td style={{ width: '50%' }}>{feedback.message}</td>
                  <td>
                    <FormattedDate value={new Date(feedback.date)} year="numeric" month="long" day="2-digit" />
                  </td>
                  <td>{feedback.email}</td>
                  <td>
                    <button onClick={() => this.props.deleteFeedback(feedback)} className="btn btn-default">
                      Delete <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    isFetching: store.feedbackReducer.isFetching,
    feedback: store.feedbackReducer.feedback
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFeedback, deleteFeedback }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
