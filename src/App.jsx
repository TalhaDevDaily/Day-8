import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import BlogHome from "./pages/BlogHome";
import BlogLayout from "./layouts/BlogLayout";
import BlogOverview from "./pages/BlogOverview";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path="/overview" element={<BlogOverview />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;
