import asyncRoute from './util/asyncRoute';

//App Specific components
const Home = asyncRoute(() => System.import('./containers/Home'));
const Page = asyncRoute(() => System.import('./containers/Pages'));
const Contact = asyncRoute(() => System.import('./containers/Contact'));
const Coverage = asyncRoute(() => System.import('./containers/Coverage'));
const Magazine = asyncRoute(() => System.import('./containers/Magazine'));
const Releases = asyncRoute(() => System.import('./containers/Releases'));
const Tournaments = asyncRoute(() => System.import('./containers/Tournaments'));
const Login = asyncRoute(() => System.import('./containers/Login'));
const Dashboard = asyncRoute(() => System.import('./containers/Dashboard'));
const AdminTournaments = asyncRoute(() => System.import('./containers/Tournaments/tournaments'));
const EditTournament = asyncRoute(() => System.import('./containers/Tournaments/EditTournament'));
const AdminPages = asyncRoute(() => System.import('./containers/Pages/pages'));
const EditPage = asyncRoute(() => System.import('./containers/Pages/EditPage'));
const AdminUsers = asyncRoute(() => System.import('./containers/Users'));
const EditUser = asyncRoute(() => System.import('./containers/Users/EditUser'));
const AdminArticles = asyncRoute(() => System.import('./containers/Articles/articles'));
const EditArticle = asyncRoute(() => System.import('./containers/Articles/EditArticle'));

export const routes = [
  {
    path: '/about-us',
    component: Page
  },
  {
    path: '/tournaments/:year',
    component: Tournaments,
    exact: true
  },
  {
    path: '/tournaments',
    component: Tournaments
  },
  {
    path: '/press/releases',
    component: Releases
  },
  {
    path: '/press/media',
    component: Coverage
  },
  {
    path: '/press/magazine',
    component: Magazine
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Dashboard,
    exact: true
  },
  {
    path: '/admin/articles',
    component: AdminArticles,
    exact: true
  },
  {
    path: '/admin/articles/:key',
    component: EditArticle
  },
  {
    path: '/admin/press',
    component: Dashboard
  },
  {
    path: '/admin/pages',
    component: AdminPages,
    exact: true
  },
  {
    path: '/admin/pages/:key',
    component: EditPage
  },
  {
    path: '/admin/tournaments',
    component: AdminTournaments,
    exact: true
  },
  {
    path: '/admin/tournaments/:key',
    component: EditTournament
  },
  {
    path: '/admin/users',
    component: AdminUsers,
    exact: true
  },
  {
    path: '/admin/users/:key',
    component: EditUser
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
];
