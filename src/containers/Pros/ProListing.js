import React, { Component } from 'react';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import TextField from '../../components/TextField';
import { mapObjectToArray } from '../../util/util';

class ProListing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pros: this.buildUserMap(props.pros, ''),
      search: ''
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      search: e.target.value,
      pros: this.buildUserMap(this.props.pros, e.target.value)
    });
  }

  render() {
    if (this.state.pros) {
      return (
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6">
                <label>Search By Name:</label>
                <TextField text={this.state.search} onFieldChanged={this.handleFieldChange} />
              </div>
            </div>

            {Object.keys(this.state.pros).sort().map((key, i) => (
              <div key={i}>
                <h3>{key}</h3>
                <hr />
                <div className="row">
                  {this.state.pros[key].map((pro, i) => (
                    <div key={i} className="col-sm-4 col-md-4">
                      <div className={pro.relation}>
                        <Link to={`/pros/${pro.username}`}>
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
              <h4>Categories </h4>
              <i className="fa fa-star" /><span>Qualified professionals</span><br />
              <i className="fa fa-circle" /><span>Certified Instructors</span><br />
              <i className="fa fa-circle-o" /><span>Trainees</span><br />
            </div>
          </div>
        </div>
      );
    } else
      return <div />;
  }

  buildUserMap(users, searchString) {
    users = mapObjectToArray(users);
    const entrants = ['full', 'tournament', 'associate', 'member', 'trainer', 'trainee', 'seniortrainee'];
    let filteredUsers = {};

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

export default ProListing;
