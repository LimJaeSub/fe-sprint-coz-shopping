import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logoimg from "../props/image/Logo.png";
import Hambugericon from "../props/icon/hambuger.svg";

import DropDown from "./DropDown";

const HeaderWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  box-shadow: 0 8px 8px 0px rgb(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;
const HeaderLeft = styled.div`
  width: 40%;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 60px;
  height: 30px;
  margin: 15px;
  cursor: pointer;
`;
const HeaderRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
`;
const Hambuger = styled.img`
  width: 30px;
  height: 20px;
  margin: 10px;
  cursor: pointer;
`;

function Header() {
  const [isShow, setIsShow] = useState(false);

  const toggleShowDropDown = () => {
    setIsShow(!isShow);
  };
  return (
    <HeaderWrap>
      <HeaderLeft>
        <Link to="/">
          <Logo src={Logoimg} />
        </Link>
        COZ Shopping
      </HeaderLeft>
      <HeaderRight>
        <Hambuger src={Hambugericon} onClick={toggleShowDropDown} />
        {isShow && <DropDown />}
      </HeaderRight>
    </HeaderWrap>
  );
}

export default Header;
