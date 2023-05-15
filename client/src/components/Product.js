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

function Show({ data }) {
  switch (data.type) {
    case "Product":
      return (
        <>
          <ProductPicture src={data.image_url} />
          {data.title}
        </>
      );
    case "Exhibition":
      return (
        <>
          <ProductPicture src={data.image_url} />
          {data.title}
        </>
      );
    case "Brand":
      return (
        <>
          <ProductPicture src={data.brand_image_url} />
          {data.brand_name}
        </>
      );
    case "Category":
      return (
        <>
          <ProductPicture src={data.image_url} />
          {data.title}
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
