import React, { useState } from "react";
import styled from "styled-components";
import BookOn from "../props/icon/bookmarkoff.png";
import Bookmark from "./Bookmark";

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`;
const ProductPictureWrap = styled.div`
  width: 100%;
  height: 70%;
  border: none;
  position: relative;
`;
const ProductPicture = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 0;
`;
const BookmarkIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 10px;
  bottom: 10px;
`;
const InformationDetail = styled.div`
  width: 100%;
  height: 25%;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
`;
const DetailLeft = styled.div`
  font-size: 16px;
  width: 65%;
`;
const DetailLefttitle = styled.div`
  font-weight: bold;
`;
const DetailRight = styled.div`
  font-size: 16px;
  text-align: right;
`;
// brand
const DetailRightFollower = styled.div`
  font-weight: bold;
`;
// Product
const DetailRightdiscount = styled.div`
  font-weight: bold;
  color: #452cdd;
`;

function Show({ data }) {
  switch (data.type) {
    case "Product":
      return (
        <>
          <ProductPictureWrap>
            <ProductPicture src={data.image_url} />
            <BookmarkIcon>
              <Bookmark data={data} />
            </BookmarkIcon>
          </ProductPictureWrap>
          <InformationDetail>
            <DetailLeft>
              <DetailLefttitle>{data.title}</DetailLefttitle>
            </DetailLeft>
            <DetailRight>
              <DetailRightdiscount>
                {data.discountPercentage}%
              </DetailRightdiscount>
              <div>
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </div>
            </DetailRight>
          </InformationDetail>
        </>
      );
    case "Exhibition":
      return (
        <>
          <ProductPictureWrap>
            <ProductPicture src={data.image_url} />
            <BookmarkIcon>
              <Bookmark data={data} />
            </BookmarkIcon>
          </ProductPictureWrap>
          <InformationDetail>
            <DetailLeft>
              <DetailLefttitle>{data.title}</DetailLefttitle>
              <div>{data.sub_title}</div>
            </DetailLeft>
          </InformationDetail>
        </>
      );
    case "Brand":
      return (
        <>
          <ProductPictureWrap>
            <ProductPicture src={data.brand_image_url} />
            <BookmarkIcon>
              <Bookmark data={data} />
            </BookmarkIcon>
          </ProductPictureWrap>
          <InformationDetail>
            <DetailLeft>
              <DetailLefttitle>{data.brand_name}</DetailLefttitle>
            </DetailLeft>
            <DetailRight>
              <DetailRightFollower>관심고객수</DetailRightFollower>
              {data.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </DetailRight>
          </InformationDetail>
        </>
      );
    case "Category":
      return (
        <>
          <ProductPictureWrap>
            <ProductPicture src={data.image_url} />
            <BookmarkIcon>
              <Bookmark data={data} />
            </BookmarkIcon>
          </ProductPictureWrap>
          <InformationDetail>
            <DetailLefttitle>#{data.title}</DetailLefttitle>
          </InformationDetail>
        </>
      );
    default:
      return <>Loading...</>;
  }
}
function Product(props) {
  //const [dataid,setDataid] = useState('');
  const data = props.data;

  const productClick = () => {
    props.openModal(data.id);
  };
  return (
    <ProductWrap onClick={productClick}>
      {data ? <Show data={data} /> : <>Loading...</>}
    </ProductWrap>
  );
}

export default Product;
