export const GlobalVariables = Object.freeze({
  API_URL: "https://tools.llrweb.com/ic/",
  MENU_ITEMS: [
    {
      title: 'Lock Shop',
      actions: [
          {
            icon: 'vpn_key',
            action: 'Create Lock Request',
            link: '/locks'
          }
        ]
    },
    {
      title: 'Physical Plant',
      actions: [
        {
          icon: 'work',
          action: 'Create Facilities Request',
          link: '/request'
        }
      ]
    },
    {
      title: 'Web Services',
      actions: [
        {
          icon: 'language',
          action: 'View Active Websites',
          link: '/activeSites'
        }
      ]
    }
  ]
});
