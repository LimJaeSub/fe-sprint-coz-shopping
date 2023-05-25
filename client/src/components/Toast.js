import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ToastWrap = styled.div`
  position: fixed;
  background: red;
  z-index: 9999;
  width: 100px;
  height: 100px;
  right: 20px;
  bottom: 20px;
  border: 1px solid;
`;
function Toast({ toastType, toastShow }) {
  // toastType이 true면 off->on
  const result = toastType === true ? "북마크 등록입니다" : "북마크 해제입니다";
  console.log(toastShow);
  return <ToastWrap>{result}</ToastWrap>;
}

export default Toast;
