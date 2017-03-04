import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArchives } from './actions';

class Archives extends Component {
  constructor(props, context) {
    super(props, context);

    this.sortArchives = this.sortArchives.bind(this);
  }
  componentDidMount(){
    this.props.getArchives();
  }

  sortArchives(a, b) {
      return a - b;
  }

  render() {
      if (typeof this.props.archives !=='undefined'){

        let archives = this.props.archives[this.props.type].sort((a, b) => b - a);
        return(
          <div className="">
            <ul>
            {(archives).map((archive, i) =>
              <li key={i}>
                <Link to={this.props.link+archive}>{archive}</Link>
              </li>
            )}

            </ul>
          </div>
        );
      } else {
        return (<div></div>);
      }
    }
}

function mapStateToProps(store) {
  return {
      archives: store.archiveReducer.archives
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArchives }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Archives);