import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888888;
  margin-top: 30px;
`;
function Footer() {
  return (
    <FooterWrap>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>All rights reserved @ Jasub</div>
    </FooterWrap>
  );
}

export default Footer;
