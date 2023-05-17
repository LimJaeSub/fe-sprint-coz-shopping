import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Allimg from "../props/image/All.png";
import Brandimg from "../props/image/Brand.png";
import Categoryimg from "../props/image/Category.png";
import Exhibitionimg from "../props/image/Exhibition.png";
import Productimg from "../props/image/Product.png";
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
function ProductListPage() {
  // app.js에서 최초 1번 useEffect를 통해 전체 데이터를 받아온 Redux에서 state 가져옴.
  const data = useSelector((state) => state.items);

  const [renderType, setRenderType] = useState(data);

  // 받아온 data->state
  useEffect(() => {
    setRenderType(data);
  }, [data]);

  const filterData = (type) => {
    if (type === "All") {
      setRenderType(data);
    }
    const filterarr = data.filter((it) => {
      return it.type === type;
    });
    setRenderType(filterarr);
  };

  return (
    <PageWrap>
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
      {renderType.length === 0 ? <div>Loading...</div> : renderType[0].id}
    </PageWrap>
  );
}

export default ProductListPage;
