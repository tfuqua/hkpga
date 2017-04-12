import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Accordion from '../../components/Accordion';
import Tabs from '../../components/Tabs';
import Select from '../../components/Select';
import { userFields, genders, trueFalse } from '../../util/data';
import { saveUser } from './actions';

class UserForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCalendar: false,
      user: props.user,
      id: props.id
    };

    this.saveUser = this.saveUser.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({ article: { ...this.state.article, publish_date: moment(date).valueOf() } });
  }

  handleFieldChange(field) {
    return e => {
      if (field.includes('.')) {
        let arr = field.split('.');
        let user = {
          ...this.state.user[arr[0]],
          [arr[1]]: e.target.value
        };
        this.setState({ user: { ...this.state.user, [arr[0]]: user } });
      } else {
        this.setState({ user: { ...this.state.user, [field]: e.target.value } });
      }
    };
  }

  handleSelectChange(field) {
    return e => {
      this.setState({ user: { ...this.state.user, [field]: e.target.value } });
    };
  }

  saveUser() {
    this.props.saveUser(this.state.id, this.state.user);
  }

  render() {
    return (
      <div className="">

        <div className="text-right">
          <button onClick={this.saveUser} className="btn btn-primary">Save</button>
        </div>
        <br />

        <div className="accordion-wrapper">
          <Accordion open={true} header={`Name & Standing`}>
            <div className="row">
              <div className="col-sm-6">

                <div className="form-group">
                  <label>Name</label>
                  <Tabs
                    selectedIndex={0}
                    tabs={[
                      {
                        name: 'en',
                        component: (
                          <TextField
                            showError={this.state.showErrors}
                            text={this.state.user.name.en}
                            onFieldChanged={this.handleFieldChange('name.en')}
                          />
                        )
                      },
                      {
                        name: 'zh-cn',
                        component: (
                          <TextField
                            showError={this.state.showErrors}
                            text={this.state.user.name['zh-cn']}
                            onFieldChanged={this.handleFieldChange('name.zh-cn')}
                          />
                        )
                      },
                      {
                        name: 'zh-hk',
                        component: (
                          <TextField
                            showError={this.state.showErrors}
                            text={this.state.user.name['zh-hk']}
                            onFieldChanged={this.handleFieldChange('name.zh-hk')}
                          />
                        )
                      }
                    ]}
                  />
                </div>

                <div className="form-group">
                  <label>Is Admin?</label>
                  <Select
                    handleChange={this.handleSelectChange('isAdmin')}
                    value={this.state.user.isAdmin}
                    options={trueFalse}
                  />
                </div>
                <div className="form-group">
                  <label>Active</label>
                  <Select
                    handleChange={this.handleSelectChange('active')}
                    value={this.state.user.active}
                    options={trueFalse}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>Committee</label>
                  <Select
                    handleChange={this.handleSelectChange('committee')}
                    value={this.state.user.committee}
                    options={userFields.committee}
                  />
                </div>

                <div className="form-group">
                  <label>Honorary Position</label>
                  <Select
                    handleChange={this.handleSelectChange('honorary')}
                    value={this.state.user.honorary}
                    options={userFields.honorary}
                  />
                </div>

                <div className="form-group">
                  <label>HKPGA Relation</label>
                  <Select
                    handleChange={this.handleSelectChange('relation')}
                    value={this.state.user.relation}
                    options={userFields.relations}
                  />
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion open={false} header={`Personal Info`}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Email</label>
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.user.email}
                    onFieldChanged={this.handleFieldChange('email')}
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.user.phone}
                    onFieldChanged={this.handleFieldChange('phone')}
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <Select
                    handleChange={this.handleSelectChange('gender')}
                    value={this.state.user.gender}
                    options={genders}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>Member Since</label>
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.user.member_since}
                    onFieldChanged={this.handleFieldChange('member_since')}
                  />
                </div>

                <div className="form-group">
                  <label>Profile Picture</label>
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.user.profile_picture}
                    onFieldChanged={this.handleFieldChange('profile_picture')}
                  />
                </div>

                <div className="form-group">
                  <label>Pro Since</label>
                  <TextField
                    showError={this.state.showErrors}
                    text={this.state.user.pro_since}
                    onFieldChanged={this.handleFieldChange('pro_since')}
                  />
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion open={false} header={`Qualifications & Achievements`}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Qualifications</label>
                  <Tabs
                    selectedIndex={0}
                    tabs={[
                      {
                        name: 'en',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.qualifications ? this.state.user.qualifications.en : ''}
                            onFieldChanged={this.handleFieldChange('qualifications.en')}
                          />
                        )
                      },
                      {
                        name: 'zh-cn',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.qualifications ? this.state.user.qualifications['zh-cn'] : ''}
                            onFieldChanged={this.handleFieldChange('qualifications.zh-cn')}
                          />
                        )
                      },
                      {
                        name: 'zh-hk',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.qualifications ? this.state.user.qualifications['zh-hk'] : ''}
                            onFieldChanged={this.handleFieldChange('qualifications.zh-hk')}
                          />
                        )
                      }
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Achievements</label>
                  <Tabs
                    selectedIndex={0}
                    tabs={[
                      {
                        name: 'en',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.achievements ? this.state.user.achievements.e : ''}
                            onFieldChanged={this.handleFieldChange('achievements.en')}
                          />
                        )
                      },
                      {
                        name: 'zh-cn',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.achievements ? this.state.user.achievements['zh-cn'] : ''}
                            onFieldChanged={this.handleFieldChange('achievements.zh-cn')}
                          />
                        )
                      },
                      {
                        name: 'zh-hk',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.achievements ? this.state.user.achievements['zh-hk'] : ''}
                            onFieldChanged={this.handleFieldChange('achievements.zh-hk')}
                          />
                        )
                      }
                    ]}
                  />
                </div>
              </div>

            </div>
          </Accordion>

          <Accordion open={false} header={`Teaching Experience`}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Teaching Experience</label>
                  <Tabs
                    selectedIndex={0}
                    tabs={[
                      {
                        name: 'en',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={this.state.user.teaching_experience ? this.state.user.teaching_experience.en : ''}
                            onFieldChanged={this.handleFieldChange('teaching_experience.en')}
                          />
                        )
                      },
                      {
                        name: 'zh-cn',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={
                              this.state.user.teaching_experience ? this.state.user.teaching_experience['zh-cn'] : ''
                            }
                            onFieldChanged={this.handleFieldChange('teaching_experience.zh-cn')}
                          />
                        )
                      },
                      {
                        name: 'zh-hk',
                        component: (
                          <TextArea
                            showError={this.state.showErrors}
                            text={
                              this.state.user.teaching_experience ? this.state.user.teaching_experience['zh-hk'] : ''
                            }
                            onFieldChanged={this.handleFieldChange('teaching_experience.zh-hk')}
                          />
                        )
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);
