import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GenerateRoutes from '../../components/GenerateRoutes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoMatch from '../../components/NoMatch';

class App extends Component {

  render() {
    return(
        <div className="site">
          <Header location={this.props.location}/>
            <div className="site-content">
              <Switch>                    
                <GenerateRoutes />
                <Route component={NoMatch}/>
              </Switch>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;