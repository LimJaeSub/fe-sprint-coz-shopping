import React from "react";
import styled from "styled-components";

import Bookmark from "../props/icon/bookmarkicon.svg";
import Product from "../props/icon/producticon.svg";

const DropDownWrap = styled.div`
  position: absolute;
  right: -10px;
  top: 75%;
  z-index: 10;
`;
const DropDownUl = styled.ul`
  background-color: rgb(240, 244, 248);
  list-style: none;
  border-radius: 12px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 8px 0px rgb(0, 0, 0, 0.1);
`;

const DropDownli = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 20px solid rgb(240, 244, 248);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  margin-left: 150px;
`;

const IconWrap = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 5px;
`;
function DropDown() {
  return (
    <DropDownWrap>
      <Triangle />
      <DropDownUl>
        <DropDownli>OOO 님, 안녕하세요!</DropDownli>
        <DropDownli>
          <IconWrap src={Bookmark} />
          상품리스트 페이지
        </DropDownli>
        <DropDownli>
          <IconWrap src={Product} />
          북마크 페이지
        </DropDownli>
      </DropDownUl>
    </DropDownWrap>
  );
}

export default DropDown;
