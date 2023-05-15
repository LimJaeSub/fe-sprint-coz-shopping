import React from "react";
import styled from "styled-components";

import Logoimg from "../props/image/Logo.png";
import Hambugericon from "../props/icon/hambuger.svg";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  box-shadow: 0 8px 8px 0px rgb(0, 0, 0, 0.1);
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
`;
const HeaderRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const Hambuger = styled.img`
  width: 30px;
  height: 20px;
  margin: 10px;
`;
function Header() {
  return (
    <HeaderWrap>
      <HeaderLeft>
        <Logo src={Logoimg} />
        COZ Shopping
      </HeaderLeft>
      <HeaderRight>
        <Hambuger src={Hambugericon} />
      </HeaderRight>
    </HeaderWrap>
  );
}

export default Header;
