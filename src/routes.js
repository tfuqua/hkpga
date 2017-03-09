import asyncRoute from './util/asyncRoute';

//App Specific components
const Home              = asyncRoute(() => System.import('./containers/Home'));
const Page              = asyncRoute(() => System.import('./containers/Pages'));
const Contact           = asyncRoute(() => System.import('./containers/Contact'));
const Coverage          = asyncRoute(() => System.import('./containers/Coverage'));
const Magazine          = asyncRoute(() => System.import('./containers/Magazine'));
const Releases          = asyncRoute(() => System.import('./containers/Releases'));
const Tournaments       = asyncRoute(() => System.import('./containers/Tournaments'));
const Login             = asyncRoute(() => System.import('./containers/Login'));
const Dashboard         = asyncRoute(() => System.import('./containers/Admin/Dashboard'));
const AdminTournaments  = asyncRoute(() => System.import('./containers/Admin/Tournaments'));
const AdminPages        = asyncRoute(() => System.import('./containers/Admin/Pages'));
const AdminUsers        = asyncRoute(() => System.import('./containers/Admin/Users'));
const AdminArticles     = asyncRoute(() => System.import('./containers/Admin/Articles'));

export const routes = [
  { path: '/about-us',
    component: Page
  },  
  { path: '/tournaments/:year',
    component: Tournaments,
    exact: true,
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
  { path: '/admin',
    component: Dashboard,
    exact: true,
  },     
  { path: '/admin/articles',
    component: AdminArticles
  },     
  { path: '/admin/press',
    component: Dashboard
  },    
  { path: '/admin/pages',
    component: AdminPages
  },   
  { path: '/admin/tournaments',
    component: AdminTournaments,
    exact: true,
  },                   
  { path: '/admin/users',
    component: AdminUsers
  },      
  { path: '/',
    component: Home,
    exact: true,
  },  
]