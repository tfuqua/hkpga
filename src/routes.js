import routeLoader from './util/routeLoader';

//App Specific components
const Home = routeLoader(() => import('./containers/Home'));
const Register = routeLoader(() => import('./containers/Register'));
const Forgot = routeLoader(() => import('./containers/Forgot'));
const Page = routeLoader(() => import('./containers/Pages'));
const Contact = routeLoader(() => import('./containers/Contact'));
const Tournaments = routeLoader(() => import('./containers/Tournaments'));
const TournamentView = routeLoader(() => import('./containers/Tournament'));
const Login = routeLoader(() => import('./containers/Login'));
const Dashboard = routeLoader(() => import('./containers/Dashboard'));
const AdminTournaments = routeLoader(() => import('./containers/Tournaments/tournaments'));
const EditTournament = routeLoader(() => import('./containers/Tournaments/EditTournament'));
const EditTournamentResults = routeLoader(() => import('./containers/Tournaments/EditResults'));
const AdminPages = routeLoader(() => import('./containers/Pages/pages'));
const EditPage = routeLoader(() => import('./containers/Pages/EditPage'));
const AdminUsers = routeLoader(() => import('./containers/Users'));
const EditUser = routeLoader(() => import('./containers/Users/EditUser'));
const AdminArticles = routeLoader(() => import('./containers/Articles/articles'));
const ArticleView = routeLoader(() => import('./containers/Articles/ArticleView'));
const EditArticle = routeLoader(() => import('./containers/Articles/EditArticle'));
const Pros = routeLoader(() => import('./containers/Pros'));
const AdminPress = routeLoader(() => import('./containers/Press'));
const EditPress = routeLoader(() => import('./containers/Press/EditPress'));
const PressView = routeLoader(() => import('./containers/Press/PressView'));
const ProView = routeLoader(() => import('./containers/Pros/ProView'));
const Partners = routeLoader(() => import('./containers/Partners'));
const Committee = routeLoader(() => import('./containers/Committee'));
const Terms = routeLoader(() => import('./containers/Terms'));
const Merit = routeLoader(() => import('./containers/Merit'));

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
    component: Page,
    exact: true
  },
  {
    path: '/pros/:username',
    component: ProView,
    exact: true
  },
  {
    path: '/pros',
    component: Pros,
    exact: true
  },
  {
    path: '/about/partners',
    component: Partners
  },
  {
    path: '/about/committee-honorary',
    component: Committee
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
    path: '/merit',
    component: Merit,
    exact: true
  },
  {
    path: '/merit/:year?',
    component: Merit,
    exact: true
  },
  {
    path: '/news/:slug',
    component: ArticleView,
    exact: true
  },
  {
    path: '/press/:type',
    component: PressView
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
    component: AdminPress,
    exact: true
  },
  {
    path: '/admin/press/:key',
    component: EditPress,
    exact: true
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
    path: '/terms',
    component: Terms
  },
  {
    path: '/register',
    component: Register,
    exact: true
  },
  {
    path: '/forgot',
    component: Forgot,
    exact: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
];
