export const GlobalVariables = Object.freeze({
  API_URL: "https://tools.llrweb.com/ic/",
  INFOSCAPE_URL: "https://tools.llrweb.com/",
  MENU_ITEMS: [
    {
      title: 'Account Self-Service',
      permission: '',
      actions: [
        {
          icon: 'vpn_key',
          action: 'Change Password',
          link: '/passwordReset',
          permission: ''
        }
      ]
    },
    {
      title: 'Help Desk',
      permission: 'tickets',
      actions: [
        {
          icon: 'forum',
          action: 'Help Desk Requests',
          link: '/helpDesk',
          permission: 'tickets-customer'
        }
      ]
    },
    {
      title: 'Web Services',
      permission: 'itsm_web',
      actions: [
        {
          icon: 'language',
          action: 'View Active Websites',
          link: '/activeSites',
          permission: 'itsm_web-vhosts-r'
        }
      ]
    }
  ]
});
