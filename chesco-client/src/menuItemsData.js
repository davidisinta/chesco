export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },


  {
    title: 'Fitness',
    url: '/fitness',
    submenu: [
      {
        title: 'generate fitness plan',
        url: 'generateFitness',
      },
      {
        title: 'my workout plans',
        url: 'workoutPlan',
      },
      {
        title: 'my fitness progress',
        url: 'fitnessProgress',
      },
    ],
  },

    {
    title: 'Diet',
    url: '/diet',
    submenu: [
      {
        title: 'generate meal plan',
        url: 'generateMeal',
      },
      {
        title: 'food rating meter',
        url: 'foodRating',
      },
      {
        title: 'my diet progress',
        url: 'dietProgress',
      },
    ],
  },



  {
    title: 'About',
    url: '/about',
  },
];
