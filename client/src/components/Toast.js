import React from "react";
import styled from "styled-components";
import bookmarkon from "../props/icon/bookmarkon.png";
import bookmarkoff from "../props/icon/bookmarkoff.png";

const ToastWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  width: 300px;
  height: 50px;
  right: 20px;
  bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  transition: ease-in-out 2s;
`;
function Toast({ toastType }) {
  const result =
    toastType === true ? (
      <ToastWrap>
        <img src={`${bookmarkon}`} alt="bookmarkon" />
        상품이 북마크에 추가되었습니다.
      </ToastWrap>
    ) : (
      <ToastWrap>
        <img src={`${bookmarkoff}`} alt="bookmarkoff" />
        상품이 북마크에서 제거되었습니다.
      </ToastWrap>
    );
  return result;
}

export default Toast;
