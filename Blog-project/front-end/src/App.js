import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContextPrv } from "./context/userContext";
import { Blogs } from "./pages/blogs";
import { Main } from "./pages/main";
import Make from "./pages/make";
import { MainLayout } from "./layout/mainLayout";
import Style from "./pages/style";
import { Indiv } from "./components/individual";
import { Login } from "./pages/login";

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
              <Route path="login" element={<Login />} />
              <Route path="blogs/:id" element={<Indiv/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </UserContextPrv>
  );
}
