import React, { Component } from 'react';
import LatestNews from '../../components/LatestNews';
import MoreNews from '../../components/News/MoreNews';
import Carousel from '../../components/Carousel';
import OrderOfMerit from '../../components/Merit';
import LatestTournamentScores from '../../components/Tournament/Latest';
import Partners from '../Partners';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Carousel />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <LatestNews />
              <MoreNews />
            </div>
            <div className="col-md-5">
              <OrderOfMerit />
              <LatestTournamentScores />
            </div>
            <div className="col-xs-12">
              <hr />
              <Partners />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
