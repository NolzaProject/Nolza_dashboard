import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '미션 승인',
      icon: 'ti-panel',
      path: '/admin/confirm'
    },
    {
      name: '사용자 관리',
      icon: 'ti-user',
      path: '/admin/users'
    },
    {
      name: '미션 등록',
      icon: 'ti-view-list-alt',
      path: '/admin/register-mission'
    },
    {
      name: '테마 등록',
      icon: 'ti-pencil-alt2',
      path: '/admin/register-theme'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
