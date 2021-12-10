export const SideMenuItems = {
  menu1: {
    title: 'Itens',
    items: [
      {
        name: 'Dashboard',
        icon: 'home',
        action: '/app/dashboard',
      },
      {
        name: 'Products',
        icon: 'plus-box',
        action: '/app/crud',
      },
    ],
  },
  menu2: {
    title: 'Anothers',
    items: [
      {
        name: 'Vacation Itinerary',
        updated: new Date('2/20/16'),
      },
      {
        name: 'Kitchen Remodel',
        updated: new Date('1/18/16'),
      },
    ],
  },
};
