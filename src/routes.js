import routeLoader from './util/routeLoader';

//App Specific components
const Home = routeLoader(() => import(/* webpackChunkName: "Home" */ './containers/Home'));
const Register = routeLoader(() => import(/* webpackChunkName: "Register" */ './containers/Register'));
const Forgot = routeLoader(() => import(/* webpackChunkName: "Forgot" */ './containers/Forgot'));
const Page = routeLoader(() => import(/* webpackChunkName: "Pages" */ './containers/Pages'));
const Contact = routeLoader(() => import(/* webpackChunkName: "Contact" */ './containers/Contact'));
const AdminContact = routeLoader(() => import(/* webpackChunkName: "AdminContact" */ './containers/Contact/admin'));
const Tournaments = routeLoader(() => import(/* webpackChunkName: "Tournaments" */ './containers/Tournaments'));
const TournamentView = routeLoader(() => import(/* webpackChunkName: "Tournament" */ './containers/Tournament'));
const Login = routeLoader(() => import(/* webpackChunkName: "Login" */ './containers/Login'));
const Dashboard = routeLoader(() => import(/* webpackChunkName: "Dashboard" */ './containers/Dashboard'));
const AdminTournaments = routeLoader(() =>
  import(/* webpackChunkName: "AdminTournaments" */ './containers/Tournaments/tournaments')
);
const EditTournament = routeLoader(() =>
  import(/* webpackChunkName: "EditTournament" */ './containers/Tournaments/EditTournament')
);
const EditTournamentResults = routeLoader(() =>
  import(/* webpackChunkName: "EditResults" */ './containers/Tournaments/EditResults')
);
const AdminPages = routeLoader(() => import(/* webpackChunkName: "Pages" */ './containers/Pages/pages'));
const EditPage = routeLoader(() => import(/* webpackChunkName: "EditPage" */ './containers/Pages/EditPage'));
const AdminUsers = routeLoader(() => import(/* webpackChunkName: "AdminUsers" */ './containers/Users'));
const EditUser = routeLoader(() => import(/* webpackChunkName: "EditUser" */ './containers/Users/EditUser'));
const AdminArticles = routeLoader(() =>
  import(/* webpackChunkName: "AdminArticles" */ './containers/Articles/articles')
);
const ArticleView = routeLoader(() =>
  import(/* webpackChunkName: "ArticleView" */ './containers/Articles/ArticleView')
);
const EditArticle = routeLoader(() =>
  import(/* webpackChunkName: "EditArticle" */ './containers/Articles/EditArticle')
);
const Pros = routeLoader(() => import(/* webpackChunkName: "Pros" */ './containers/Pros'));
const AdminPress = routeLoader(() => import(/* webpackChunkName: "Press" */ './containers/Press'));
const EditPress = routeLoader(() => import(/* webpackChunkName: "EditPress" */ './containers/Press/EditPress'));
const PressView = routeLoader(() => import(/* webpackChunkName: "PressView" */ './containers/Press/PressView'));
const ProView = routeLoader(() => import(/* webpackChunkName: "ProView" */ './containers/Pros/ProView'));
const Partners = routeLoader(() => import(/* webpackChunkName: "Partners" */ './containers/Partners'));
const Committee = routeLoader(() => import(/* webpackChunkName: "Committee" */ './containers/Committee'));
const Terms = routeLoader(() => import(/* webpackChunkName: "Terms" */ './containers/Terms'));
const Merit = routeLoader(() => import(/* webpackChunkName: "Merit" */ './containers/Merit'));
const AdminMerit = routeLoader(() => import(/* webpackChunkName: "AdminMerit" */ './containers/Merit/AdminMerit'));
const MeritForm = routeLoader(() => import(/* webpackChunkName: "MeritForm" */ './containers/Merit/MeritView'));

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
    path: '/admin/merit',
    component: AdminMerit,
    exact: true
  },
  {
    path: '/admin/merit/:year',
    component: MeritForm,
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
    path: '/admin/contact',
    component: AdminContact
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
