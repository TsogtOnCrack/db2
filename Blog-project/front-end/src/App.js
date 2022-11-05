import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContextPrv } from "./context/userContext";
import { Blogs } from "./pages/blogs";
import { Main } from "./pages/main";
import Make from "./pages/make";
import { MainLayout } from "./layout/mainLayout";
import Style from "./pages/style";

export default function App() {
  return (
    <UserContextPrv>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="make" element={<Make />} />
              <Route path="style" element={<Style />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </UserContextPrv>
  );
}
