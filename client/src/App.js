import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BookMarkPage from "./pages/BookMarkPage";
import ProductListPage from "./pages/ProductListPage";
import NotPoundPage from "./pages/NotPoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/bookmark" element={<BookMarkPage />}></Route>
        <Route path="/products/list" element={<ProductListPage />}></Route>
        <Route path="*" element={<NotPoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
