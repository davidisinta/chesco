export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },


  {
    title: 'Fitness',
    url: '/generateFitness',
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
    url: '/generateMealPlan',
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
