import React from "react";
import styled from "styled-components";
import vector from "../props/icon/vector.png";
import bookmarkoff from "../props/icon/bookmarkoff.png";

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  display: flex;
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const VectorX = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
`;
const ProductTitle = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

function Modal({ closeModal, modalID, data }) {
  const modalData = data.filter((it) => {
    return it.id === modalID;
  })[0];

  const imageurl = modalData.image_url;
  console.log(data[0].title);

  return (
    <ModalWrap>
      <ModalContent imageurl={imageurl}>
        <VectorX src={vector} onClick={closeModal} />
        <ProductTitle>{modalData.title} </ProductTitle>
      </ModalContent>
    </ModalWrap>
  );
}

export default Modal;
