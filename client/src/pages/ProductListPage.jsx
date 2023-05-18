import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Allimg from "../props/image/All.png";
import Brandimg from "../props/image/Brand.png";
import Categoryimg from "../props/image/Category.png";
import Exhibitionimg from "../props/image/Exhibition.png";
import Productimg from "../props/image/Product.png";

import Product from "../components/Product";
import Modal from "../components/Modal";
const PageWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Type = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;
const TypeTapWrap = styled.div``;
const TypeTapImg = styled.img`
  width: 82px;
  height: 82px;
`;
const TypeTapTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;
const ProductList = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductListWrap = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-around;
`;

function ProductListPage() {
  // app.js에서 최초 1번 useEffect를 통해 전체 데이터를 받아온 Redux에서 state 가져옴.
  const data = useSelector((state) => state.items);

  const [renderType, setRenderType] = useState(data);
  const [isOpen, setIsOpen] = useState(false); // Modal 창을 보여질지 말지 결정하는 state
  const [modalID, setModalID] = useState(0); // Product에서 불러온 상품의 ID를 저장하는 state
  const openModal = (data) => {
    setModalID(data);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // 받아온 data->state
  useEffect(() => {
    setRenderType(data);
  }, [data]);

  const filterData = (type) => {
    if (type === "All") {
      setRenderType(data);
    } else {
      const filterarr = data.filter((it) => {
        return it.type === type;
      });
      setRenderType(filterarr);
    }
  };

  const RenderProducts = renderType.map((it, idx) => {
    return (
      <Product
        data={it}
        openModal={openModal}
        closeModal={closeModal}
        key={idx}
      />
    );
  });
  const group = [];
  for (let i = 0; i < RenderProducts.length; i = i + 4) {
    group.push(RenderProducts.slice(i, i + 4));
  }

  // 상품 리스트들을 전부 Product 컴포넌트로 렌더링
  return (
    <PageWrap>
      {isOpen ? (
        <Modal modalID={modalID} data={data} closeModal={closeModal} />
      ) : null}
      <Type>
        <TypeTapWrap>
          <TypeTapImg src={Allimg} onClick={() => filterData("All")} />
          <TypeTapTitle>전체</TypeTapTitle>
        </TypeTapWrap>
        <TypeTapWrap>
          <TypeTapImg src={Productimg} onClick={() => filterData("Product")} />
          <TypeTapTitle>상품</TypeTapTitle>
        </TypeTapWrap>
        <TypeTapWrap>
          <TypeTapImg
            src={Categoryimg}
            onClick={() => filterData("Category")}
          />
          <TypeTapTitle>카테고리</TypeTapTitle>
        </TypeTapWrap>
        <TypeTapWrap>
          <TypeTapImg
            src={Exhibitionimg}
            onClick={() => filterData("Exhibition")}
          />
          <TypeTapTitle>기획전</TypeTapTitle>
        </TypeTapWrap>
        <TypeTapWrap>
          <TypeTapImg src={Brandimg} onClick={() => filterData("Brand")} />
          <TypeTapTitle>브랜드</TypeTapTitle>
        </TypeTapWrap>
      </Type>
      <ProductList>
        {renderType.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            {group.map((it, idx) => {
              return <ProductListWrap key={idx}>{it}</ProductListWrap>;
            })}
          </>
        )}
      </ProductList>
    </PageWrap>
  );
}

export default ProductListPage;
