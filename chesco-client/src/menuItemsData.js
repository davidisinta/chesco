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
        url: 'myWorkoutPlan',
      },
      {
        title: 'my fitness progress',
        url: 'myFitnessProgress',
      },
    ],
  },

    {
    title: 'Diet',
    url: '/diet',
    submenu: [
      {
        title: 'generate meal plan',
        url: 'generateMealPlan',
      },
        {
        title: 'my meal plans',
        url: 'myMealPlans',
      },
      {
        title: 'food health meter',
        url: 'foodHealthMeter',
      },
      {
        title: 'my diet progress',
        url: 'myDietProgress',
      },
    ],
  },



  {
    title: 'About',
    url: '/about',
  },
];
