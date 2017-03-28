import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes';
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
        <Header {...this.props} />
        <main className="site-content">
          <Message location={this.props.location} />
          <Switch>
            {routes.map(
              (route, i) =>
                route.path.startsWith('/admin')
                  ? <MatchWhenAuthed key={i} authenticated={this.props.authenticated} {...route} />
                  : <Route key={i} path={route.path} {...route} />
            )}
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const MatchWhenAuthed = route => {
  console.log(route);
  if (route.authenticated) {
    return <Route {...route} />;
  } else {
    return <Redirect to={{ pathname: '/login' }} />;
  }
};

function mapStateToProps(store) {
  return {
    authenticated: store.loginReducer.isAuthenticated
  };
}

export default connect(mapStateToProps)(App);
