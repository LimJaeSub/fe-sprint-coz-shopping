import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "./Reducer/Store";
import { useDispatch } from "react-redux";

import MainPage from "./pages/MainPage";
import BookMarkPage from "./pages/BookMarkPage";
import ProductListPage from "./pages/ProductListPage";
import NotPoundPage from "./pages/NotPoundPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

function App() {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    ); // 정보 받아옴
    dispatch({ type: "UPDATE_STATE", payload: res.data }); // reducer로 dispatch
  };

  useEffect(() => {
    fetchData(); // 초기 렌더링에만 실행(최초 1번)
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/bookmark" element={<BookMarkPage />}></Route>
        <Route path="/products/list" element={<ProductListPage />}></Route>
        <Route path="*" element={<NotPoundPage />}></Route>
      </Routes>
      <Toast />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
