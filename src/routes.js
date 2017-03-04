import React from 'react';
import { Match, Redirect } from 'react-router-dom';
import asyncRoute from './util/asyncRoute';

//App Specific components
const Home        = asyncRoute(() => System.import('./containers/Home'));
const About       = asyncRoute(() => System.import('./containers/About'));
const Contact     = asyncRoute(() => System.import('./containers/Contact'));
const Coverage    = asyncRoute(() => System.import('./containers/Coverage'));
const Magazine    = asyncRoute(() => System.import('./containers/Magazine'));
const Releases    = asyncRoute(() => System.import('./containers/Releases'));
const Tournaments = asyncRoute(() => System.import('./containers/Tournaments'));

export const routes = [
  { path: '/about-us',
    component: About,
  },  
  { path: '/tournaments/:year',
    component: Tournaments,
  },  
  { path: '/tournaments',
    component: Tournaments,
  },
  { path: '/press/releases',
    component: Releases,
  },     
  { path: '/press/media',
    component: Coverage,
  },    
  { path: '/press/magazine',
    component: Magazine,
  },       
  { path: '/contact',
    component: Contact
  },      
  { path: '/',
    component: Home,
    exactly: true,
  },  
]

export const GenerateRoutes = (props) => {
  return (
    <div>
      { props.routes.map((route, i) => (
        <div key={i}>
          {(route.path.startsWith('/admin')) ? 
            <MatchWhenAuthed authenticated={props.authenticated} {...route}/>
            :
            <Match {...route} render={(props) => ( <route.component {...props} routes={route.routes}/>)}/>
          }
          </div>
        ))}
    </div>
  );
}

export const MatchWhenAuthed = ({ component: Component, ...route }) => {

  return (
    <Match {...route} render={props => (route.authenticated ?
      (<Match {...route} render={(props) => ( <Component {...props} routes={route.routes}/>)}/>)
      :
      (<Redirect to={{ pathname: '/', state: { from: props.location }}}/>)
    )}/>
  );
}

export function getActiveRoute(location){
  if (location !== undefined){
    for (let route of routes){
      if (route.path === location.pathname){
        return route;
      }
    }
  }
}