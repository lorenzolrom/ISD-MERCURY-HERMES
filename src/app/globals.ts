export const GlobalVariables = Object.freeze({
  API_URL: "https://tools.llrweb.com/ic/",
  INFOSCAPE_URL: "https://tools.llrweb.com/",
  MENU_ITEMS: [
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
