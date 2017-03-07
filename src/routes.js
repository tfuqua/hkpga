import asyncRoute from './util/asyncRoute';

//App Specific components
const Home        = asyncRoute(() => System.import('./containers/Home'));
const About       = asyncRoute(() => System.import('./containers/About'));
const Contact     = asyncRoute(() => System.import('./containers/Contact'));
const Coverage    = asyncRoute(() => System.import('./containers/Coverage'));
const Magazine    = asyncRoute(() => System.import('./containers/Magazine'));
const Releases    = asyncRoute(() => System.import('./containers/Releases'));
const Tournaments = asyncRoute(() => System.import('./containers/Tournaments'));
const Login       = asyncRoute(() => System.import('./containers/Login'));
const Dashboard   = asyncRoute(() => System.import('./containers/Dashboard'));

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
  { path: '/login',
    component: Login
  }, 
  { path: '/admin/dashboard',
    component: Dashboard
  },          
  { path: '/',
    component: Home,
    exactly: true,
  },  
]