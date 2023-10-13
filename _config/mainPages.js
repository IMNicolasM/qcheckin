export default {
  shiftsIndex: {
    permission: 'icheckin.shifts.manage',
    activated: true,
    authenticated: true,
    path: '/checkin/shifts',
    name: 'qcheckin.main.shifts.index',
    crud: import('@imagina/qcheckin/_crud/shifts'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'icheckin.cms.sidebar.Shifts',
    icon: 'fa-light fa-user-clock',
    subHeader: {
      refresh: true
    }
  },
}
