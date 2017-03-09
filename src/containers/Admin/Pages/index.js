import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../../../components/Text';
import { getPages } from '../../Pages/actions';

class Pages extends Component {

  componentDidMount(){
    this.props.getPages();
  }

  render() {
    if (this.props.pages){
      return(
        <div className="container">
            <h2>Pages</h2>
                <div className="well">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                          <th>Title</th>
                          <th>URL</th>
                          <th>Author</th>
                          <th>Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(this.props.pages).map((key, i) =>
                        <tr key={i}>
                            <td><Text text={this.props.pages[key].title}/></td>
                            <td>{this.props.pages[key].slug}</td>
                            <td>{this.props.pages[key].author}</td>
                            <td>{this.props.pages[key].updated_at}</td>
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
      pages: store.pageReducer.pages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPages }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Pages);