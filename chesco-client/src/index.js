import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import About from "./routes/about";
import FoodHealthMeter from "./routes/foodHealthMeter";
import GenerateFitness from "./routes/generateFitness";
import MyDietProgress from "./routes/myDietProgress";
import MyFitnessProgress from "./routes/myFitnessProgress";
import MyMealPlan from "./routes/myMealPlan";
import MyWorkoutPlan from "./routes/myWorkoutPlan";
import Profile from "./routes/profile";
import Preferences from "./routes/preferences";
import CustomizeFitness from "./routes/customizeFitness";
import CurrentFitnessLevel from "./routes/currentFitnessLevel";
import BodyGoals from "./routes/bodyGoals";
import ExercisePreferences from "./routes/exercisePreferences";


const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "generateFitness",
        element: <GenerateFitness />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "myWorkoutPlan",
        element: <MyWorkoutPlan />,
      },
      {
        path: "myFitnessProgress",
        element: <MyFitnessProgress/>,
      },
        {
        path: "generateMealPlan",
        element: <MyMealPlan />,
      },
      {
        path: "myMealPlans",
        element: <MyMealPlan />,
      },
      {
        path: "foodHealthMeter",
        element: <FoodHealthMeter />,
      },
      {
        path: "myDietProgress",
        element: <MyDietProgress />,
      },
        {
        path: "profile",
        element: <Profile />,
      },

        {
        path: "preferences",
        element: <Preferences />,
      },

        {
        path: "customizeFitness",
        element: <CustomizeFitness />,
      },

        {
        path: "currentFitnessLevel",
        element: <CurrentFitnessLevel />,
      },

        {
        path: "bodyGoals",
        element: <BodyGoals />,
      },


        {
        path: "exercisePreferences",
        element: <ExercisePreferences/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

