const pages = config('pages') // Get Pages from config
//Blog
export default [
  {
    title: 'icheckin.cms.sidebar.checkin',
    icon: 'fa-light fa-stopwatch',
    children: [
      pages.mainqcheckin.shiftsIndex,
    ]
  },
]
