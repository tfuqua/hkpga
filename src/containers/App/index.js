import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GenerateRoutes from '../../components/GenerateRoutes';
import Message from '../Message';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoMatch from '../../components/NoMatch';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="site">
        <Header location={this.props.location} />
        <main className="site-content">
          <Message location={this.props.location} />
          <Switch>
            <GenerateRoutes />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
