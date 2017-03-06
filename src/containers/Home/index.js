import React, { Component } from 'react';
import LatestNews from '../../components/LatestNews';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return(
      <div>
        <div className="banner">
          <div className="hkpga-title">
            <h1>HKPGA FULL Title</h1>
          </div>

          <div id="carousel-block" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#carousel-block" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-block" data-slide-to="1"></li>
              <li data-target="#carousel-block" data-slide-to="2"></li>
              <li data-target="#carousel-block" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <div className="carousel-caption">
                  <p>SkyCity Nine Eagles Golf Course</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-caption">
                  <p>Jockey Club Kau Sai Chau Public Golf Course</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-caption">
                  <p>Clearwater Bay Golf Club</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-caption">
                  <p>Discovery Bay Golf Club</p>
                </div>
              </div>
            </div>

            <span className="left carousel-control" data-target="#carousel-block" data-slide="prev" >
              <span><i className="fa fa-angle-left fa-2x"></i></span>
            </span>
            <span className="right carousel-control" data-target="#carousel-block" data-slide="next">
              <span><i className="fa fa-angle-right fa-2x"></i></span>
            </span>
          </div>
        </div>

          <div className="container">
            <div className="row">
            <div className="col-md-8">
              <LatestNews />
            </div>  
            </div>
          </div>
      </div>
    );
  }
}
export default Home;
