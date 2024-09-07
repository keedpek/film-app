import React from "react";
import {Routes, Route} from "react-router-dom";
import { routes } from "./routes";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
 
export default AppRouter;