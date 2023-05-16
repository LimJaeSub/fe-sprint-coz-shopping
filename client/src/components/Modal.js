import React from "react";
import styled from "styled-components";

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
  border-radius: 4px;
  width: 50%;
  height: 50%;
  display: flex;
  background-image: url(${(props) => props.imageurl});
`;

function Modal({ closeModal, modalID, data }) {
  const modalData = data.filter((it) => {
    return it.id === modalID;
  })[0];

  const imageurl = modalData.image_url;
  console.log(imageurl);

  return (
    <ModalWrap>
      <ModalContent imageUrl={imageurl}>
        {modalData.id}
        {modalID}
      </ModalContent>
    </ModalWrap>
  );
}

export default Modal;
