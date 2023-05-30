import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Product from "../components/Product";
import Modal from "../components/Modal";

const Mainsection = styled.div`
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ListTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  height: 9%;
  margin-bottom: 1%;
`;
const ItemList = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
`;

const ProductComponentList = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;
const BookMarkList = styled.div`
  width: 100%;
  height: 50%;
`;

function MainPage() {
  const data = useSelector((state) => state.itemReducer.items);
  const bookmarkdata = useSelector((state) => state.itemReducer.bookmarks);
  const [isOpen, setIsOpen] = useState(false); // Modal 창을 보여질지 말지 결정하는 state
  const [modalID, setModalID] = useState(0); // Product에서 불러온 상품의 ID를 저장하는 state

  // product에서 클릭된 id 가져옴!!
  // 이 id를 Modal 컴포넌트에 넘겨줘서 id를 가지고 필터링 하여 정보에 맞는 Modal 창을 띄워준다.

  // Modal
  const openModal = (data) => {
    setModalID(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Mainsection>
        {isOpen ? (
          <Modal modalID={modalID} data={data} closeModal={closeModal} />
        ) : null}
        <ItemList>
          <ListTitle>상품 리스트</ListTitle>
          <ProductComponentList>
            <Product
              openModal={openModal}
              closeModal={closeModal}
              data={data[0]}
            />
            <Product
              openModal={openModal}
              closeModal={closeModal}
              data={data[1]}
            />
            <Product
              openModal={openModal}
              closeModal={closeModal}
              data={data[2]}
            />
            <Product
              openModal={openModal}
              closeModal={closeModal}
              data={data[3]}
            />
          </ProductComponentList>
        </ItemList>
        <BookMarkList>
          <ListTitle>북마크 리스트</ListTitle>
          <ProductComponentList>
            {bookmarkdata.length === 0 ? (
              <div>북마크를 추가해보세요!</div>
            ) : (
              <>
                <Product
                  openModal={openModal}
                  closeModal={closeModal}
                  data={bookmarkdata[0]}
                  type="bookmark"
                />
                <Product
                  openModal={openModal}
                  closeModal={closeModal}
                  data={bookmarkdata[1]}
                  type="bookmark"
                />
                <Product
                  openModal={openModal}
                  closeModal={closeModal}
                  data={bookmarkdata[2]}
                  type="bookmark"
                />
                <Product
                  openModal={openModal}
                  closeModal={closeModal}
                  data={bookmarkdata[3]}
                  type="bookmark"
                />
              </>
            )}
          </ProductComponentList>
        </BookMarkList>
      </Mainsection>
    </>
  );
}

export default MainPage;
