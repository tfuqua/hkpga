import routeLoader from './util/routeLoader';

//App Specific components
const Home = routeLoader(() => System.import('./containers/Home'));
const Page = routeLoader(() => System.import('./containers/Pages'));
const Contact = routeLoader(() => System.import('./containers/Contact'));
const Coverage = routeLoader(() => System.import('./containers/Coverage'));
const Magazine = routeLoader(() => System.import('./containers/Magazine'));
const Releases = routeLoader(() => System.import('./containers/Releases'));
const Tournaments = routeLoader(() => System.import('./containers/Tournaments'));
const TournamentView = routeLoader(() => System.import('./containers/Tournament'));
const Login = routeLoader(() => System.import('./containers/Login'));
const Dashboard = routeLoader(() => System.import('./containers/Dashboard'));
const AdminTournaments = routeLoader(() => System.import('./containers/Tournaments/tournaments'));
const EditTournament = routeLoader(() => System.import('./containers/Tournaments/EditTournament'));
const EditTournamentResults = routeLoader(() => System.import('./containers/Tournaments/EditResults'));
const AdminPages = routeLoader(() => System.import('./containers/Pages/pages'));
const EditPage = routeLoader(() => System.import('./containers/Pages/EditPage'));
const AdminUsers = routeLoader(() => System.import('./containers/Users'));
const EditUser = routeLoader(() => System.import('./containers/Users/EditUser'));
const AdminArticles = routeLoader(() => System.import('./containers/Articles/articles'));
const ArticleView = routeLoader(() => System.import('./containers/Articles/ArticleView'));
const EditArticle = routeLoader(() => System.import('./containers/Articles/EditArticle'));

export const routes = [
  {
    path: '/about/about-us',
    component: Page
  },
  {
    path: '/community/project-skyhigh',
    component: Page
  },
  {
    path: '/pros/training-program',
    component: Page
  },
  {
    path: '/tournaments/:year?',
    component: Tournaments,
    exact: true
  },
  {
    path: '/tournaments/:year?/:key',
    component: TournamentView,
    exact: true
  },
  {
    path: '/news/:slug',
    component: ArticleView,
    exact: true
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
    component: EditTournament,
    exact: true
  },
  {
    path: '/admin/tournaments/:key/results',
    component: EditTournamentResults
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
