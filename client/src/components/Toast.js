import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ToastWrap = styled.div`
  border: 1px solid;
`;
function Toast({ toastType }) {
  // const [showToast, setShowToast] = useState(false);

  // useEffect(() => {
  //   let timer;
  //   if (toastData) {
  //     timer = setTimeout(() => {
  //       setShowToast(false);
  //     }, 3000);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [toastData]);
  return <ToastWrap>Toast!!!</ToastWrap>;
}

export default Toast;
