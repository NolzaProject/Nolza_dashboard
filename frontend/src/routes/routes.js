import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Confirm from '../components/Dashboard/Views/Confirm.vue'
import UserProfile from '../components/Dashboard/Views/UserProfile.vue'
import RegisterMission from '../components/Dashboard/Views/RegisterMission.vue'
import RegisterTheme from '../components/Dashboard/Views/RegisterTheme.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/confirm'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/users',
    children: [
      {
        path: 'confirm',
        name: 'confirm',
        component: Confirm
      },
      {
        path: 'users',
        name: 'users',
        component: UserProfile
      },
      {
        path: 'register-mission',
        name: 'register-mission',
        component: RegisterMission
      },
      {
        path: 'register-theme',
        name: 'register-theme',
        component: RegisterTheme
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
