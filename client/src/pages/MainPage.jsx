import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Product from "../components/Product";

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
`;

const ProductComponentList = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;
const BookMarkList = styled.div`
  background-color: yellow;
  width: 100%;
  height: 50%;
`;

function MainPage() {
  const data = useSelector((state) => state.items);
  return (
    <>
      <Mainsection>
        <ItemList>
          <ListTitle>상품 리스트</ListTitle>
          <ProductComponentList>
            <Product data={data[0]} />
            <Product data={data[1]} />
            <Product data={data[2]} />
            <Product data={data[3]} />
          </ProductComponentList>
        </ItemList>
        <BookMarkList />
        {/* {data[0] ? <Test src={data[0].image_url} /> : <div>Loading....</div>} */}
      </Mainsection>
    </>
  );
}

export default MainPage;
