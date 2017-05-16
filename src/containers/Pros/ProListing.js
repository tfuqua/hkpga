import React, { Component } from 'react';
import Text from '../../components/Text';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveUser } from '../Users/actions';
import Select from '../../components/Select';
import TextField from '../../components/TextField';
import { prosFilter } from '../../util/data';
import { mapObjectToArray } from '../../util/util';

class ProListing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pros: this.buildUserMap(props.pros, ''),
      search: '',
      category: 4
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({
      category: e.target.value,
      pros: this.buildUserMap(this.props.pros, this.state.search, e.target.value)
    });
  }

  handleFieldChange(e) {
    this.setState({
      search: e.target.value,
      pros: this.buildUserMap(this.props.pros, e.target.value, this.state.category)
    });
  }

  render() {
    if (this.state.pros) {
      return (
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-4">
                <label>Search By Name:</label>
                <TextField text={this.state.search} onFieldChanged={this.handleFieldChange} />
              </div>
              <div className="col-sm-4">
                <label>Filter By Category:</label>
                <Select handleChange={this.handleSelectChange} options={prosFilter} value={this.state.category} />
              </div>
            </div>

            {Object.keys(this.state.pros).sort().map((key, i) => (
              <div key={i}>
                <h3>{key}</h3>
                <hr />
                <div className="row">
                  {this.state.pros[key].map((pro, i) => (
                    <div key={i} className="col-sm-4 col-md-4">
                      <div className={`pro ${pro.relation}`}>
                        <Link onClick={() => this.props.receiveUser(pro)} to={`/pros/${pro.username}`}>
                          <Text text={pro.name} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
          <div className="col-sm-3">
            <div className="pros-legend">
              <h3>Categories </h3>
              <hr />
              <ul>
                <li><i className="fa fa-star" /><span>Qualified professionals</span></li>
                <li><i className="fa fa-circle" /><span>Certified Instructors</span></li>
                <li><i className="fa fa-circle-o" /><span>Trainees</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else return <div />;
  }

  buildUserMap(users, searchString, category) {
    users = mapObjectToArray(users);
    const entrants = ['full', 'tournament', 'associate', 'member', 'trainer', 'trainee', 'seniortrainee'];
    let filteredUsers = {};

    const memberRelationStatus = {
      full: 3,
      tournament: 3,
      associate: 3,
      member: 3,
      trainer: 2,
      trainee: 1,
      seniortrainee: 1,
      honorary: 0,
      none: 0
    };

    if (category < 4) {
      users = users.filter(user => {
        if (memberRelationStatus[user.relation] == category) {
          return true;
        } else {
          return false;
        }
      });
    }

    for (let i = 0; i < users.length; i++) {
      if (
        entrants.indexOf(users[i].relation) > -1 &&
        users[i].active &&
        users[i].name.en.toUpperCase().includes(searchString.toUpperCase())
      ) {
        let k = users[i].name.en.charAt(0);
        let tempArr = filteredUsers[k];

        if (tempArr === undefined) {
          tempArr = [users[i]];
        } else {
          tempArr.push(users[i]);
        }

        filteredUsers[k] = tempArr;
      }
    }

    return filteredUsers;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProListing);
