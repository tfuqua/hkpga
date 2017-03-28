import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import config from '../../../config/env/development';
import ReactQuill from 'react-quill';
import Text from '../../components/Text';
import { getPage } from './actions';

class EditArticle extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: this.props.page
    };
  }

  componentDidMount() {
    this.props.getPage(this.props.match.params.key);
  }

  componentWillReceiveProps(nextProps) {
    /*if (nextProps.page.slug !== this.state.page.slug) {
      this.setState({ page: nextProps.page });
    }*/
  }

  render() {
    if (this.state.page) {
      return (
        <div className="container-fluid">
          <h2>Edit Page</h2>

          <pre>
            {JSON.stringify(this.state.page, null, ' ')}
          </pre>

          <ReactQuill theme="snow" modules={config.editor.modules} formats={config.editor.formats} className="">

            <div
              key="editor"
              ref="editor"
              className="quill-contents my-class-name"
              dangerouslySetInnerHTML={{ __html: this.state.page.html.en }}
            />

          </ReactQuill>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

function mapStateToProps(store) {
  return {
    page: store.pageReducer.page,
    isFetching: store.pageReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
