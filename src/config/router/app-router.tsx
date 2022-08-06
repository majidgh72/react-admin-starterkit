import { createElement } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function AppRouter() {

  const RoutesList = routes.map((route, index) => {
    const { path, element } = route;
    return (
      <Route
        key={index}
        path={path}
        element={createElement(element)}
      />
    );
  });

  return (
    <Routes>
      {RoutesList}
    </Routes>
  );
}

export default AppRouter;
