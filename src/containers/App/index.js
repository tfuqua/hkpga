import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import { getLang } from '../Lang/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoMatch from '../../components/NoMatch';
import Message from '../Message';

class App extends Component {

  render() {

    return(
        <div className="site">
          <Header location={this.props.location}/>
            <div className="site-content">
              <div className="">
                <Message location={this.props.location} />
                  <Switch>
                    {routes.map((route, i) => (
                      <Route exact key={i} path={route.path} component={route.component} />
                    ))}
                      <Route component={NoMatch}/>
                  </Switch>
              </div>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;