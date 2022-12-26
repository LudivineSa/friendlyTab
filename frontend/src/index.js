import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider} from '@mui/material/styles';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { theme }  from "./theme.js";

import Homepage from './pages/Homepage';
import Subscribe from './pages/Subscribe';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  }
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
 );