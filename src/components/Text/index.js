import React, { Component } from 'react';

class Text extends Component {
  constructor(props, context) {
    super(props, context);

    this.createMarkup = this.createMarkup.bind(this);
  }
      
    createMarkup(text){;
        return {__html: text.en};
    }

    render(){
        return(
            <div>
                <div dangerouslySetInnerHTML={this.createMarkup(this.props.text)} />
            </div>
        );
    }
}

export default Text;