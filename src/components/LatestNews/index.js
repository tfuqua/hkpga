import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import Text from '../Text';
import { getLatestArticle } from '../../containers/Articles/actions';

class LatestNews extends Component {

  componentDidMount(){
    this.props.getLatestArticle()
  }

  render(){
    if (this.props.article){
        let article = this.props.article[Object.keys(this.props.article)[0]];
        return(
        <div>
            <h2>LATEST_NEWS</h2>
            <div className="article row">
            <div className="col-md-12 latest-news">
                <div>
                    <div className="title-row title-row-transparent clearfix">
                    <div className="col-lg-2 col-md-3">
                        <h5>{article.publish_date}</h5>
                    </div>
                    <div className="col-lg-10 col-md-9">
                        <h4> <Text text={article.title} /></h4>
                    </div>
                    </div>
                </div>
                <div className="latest-news-body clearfix well">
                    <div className="col-lg-10 col-lg-offset-1 col-md-12">
                    <img  className="cover" src={article.cover} />
                    </div>
                    <div className="col-md-12">
                        <Text text={article.html} />
                    </div>
                    <div className="widget-footer col-md-12">
                    <Link to={`/news/${article.slug}`}>
                        <button type="button" className="btn">READ_MORE</button>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>    
        )
    } else {
        return (<div></div>)
    }
  }
}

function mapStateToProps(store) {
  return {
      article: store.articleReducer.article
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatestArticle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews);