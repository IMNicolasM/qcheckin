const pages = config('pages') // Get Pages from config
//Blog
export default [
  {
    title: 'icheckin.cms.sidebar.checkin',
    icon: 'fas fa-stopwatch',
    children: [
      pages.mainqcheckin.shiftsIndex,
    ]
  },
]
