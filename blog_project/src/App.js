import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Blogs } from "./pages/blogs";
import { Main } from "./pages/main";
import Make from "./pages/make";
import { MainLayout } from "./layout/mainLayout";

export default function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="make" element={<Make />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
