import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
                      <Route key={i} path={route.path} component={route.component} exactly={route.exactly} />
                    ))}
                  </Switch>
              </div>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;
