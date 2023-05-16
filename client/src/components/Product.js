import React from "react";
import styled from "styled-components";

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`;
const ProductPicture = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
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
          <ProductPicture src={data.image_url} />
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
          <ProductPicture src={data.image_url} />
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
          <ProductPicture src={data.brand_image_url} />
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
          <ProductPicture src={data.image_url} />
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
  const data = props.data;

  return (
    <ProductWrap>{data ? <Show data={data} /> : <>Loading...</>}</ProductWrap>
  );
}

export default Product;
