import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider} from '@mui/material/styles';

import { theme }  from "./theme.js";

import Test from './pages/Test'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </React.StrictMode>
 );