import React, { Component } from 'react';
import { connect } from 'react-redux';

class Text extends Component {
  constructor(props, context) {
    super(props, context);

    this.createMarkup = this.createMarkup.bind(this);
  }
      
    createMarkup(text){
        if (typeof text === 'undefined')
            return  {__html: ''};

        return {__html: text[this.props.lang]};
    }

    render(){
        return(
            <div>
                <div dangerouslySetInnerHTML={this.createMarkup(this.props.text)} />
            </div>
        );
    }
}

function mapStateToProps(store) {
  return {
      lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps)(Text);