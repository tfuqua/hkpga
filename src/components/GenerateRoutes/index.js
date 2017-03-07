import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes';

function GenerateRoutes(props){
    console.log(props);
  return (
    <div>
      {routes.map((route, i) => (
        <div key={i}>
          {(route.path.startsWith('/admin')) ?
            <MatchWhenAuthed authenticated={props.authenticated} {...route}/>
            :
            <Route exact path={route.path} component={route.component} />
          }
        </div>
      ))}
    </div>
  );
}

const MatchWhenAuthed = (route) => {
  if (route.authenticated) {
    return (<Route exact path={route.path} component={route.component} />);
  } else {
    return (<Redirect to={{ pathname: '/login',}}/>);
  }
}

function mapStateToProps(store) {
  return {
      authenticated: store.loginReducer.isAuthenticated
  };
}

export default connect(mapStateToProps)(GenerateRoutes);

