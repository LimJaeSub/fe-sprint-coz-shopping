import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Mainsection = styled.div`
  width: 100%;
  height: 80vh;
  background-color: blue;
`;
function MainPage() {
  const value = useSelector((state) => state);
  console.log(value);
  return (
    <>
      <Header />
      <Mainsection>여기메인임</Mainsection>
      <Footer />
    </>
  );
}

export default MainPage;
