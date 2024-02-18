import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout.jsx";
import { nanoid } from "nanoid";
import { main_pages } from "./router/main-router";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="shopSingle/:id" element={<ShopSingle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
