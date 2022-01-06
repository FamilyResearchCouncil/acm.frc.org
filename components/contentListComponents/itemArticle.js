import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Image from "next/image";

const WrapperDiv = styled.div`
  display: grid;
  grid-gap: 15px;
  border-bottom: solid 1px ${({theme}) => theme.colors.primary};
  margin-bottom: 30px;
`;

let ItemArticle = (props) => (
    <WrapperDiv>
        <Image src={props.imgageUrl} width={750} height={393} layout='responsive'/>
        <h4>{props.name}</h4>
        <p>{props.summary}</p>
    </WrapperDiv>
);

// <img src={props.imgageUrl} />
export default ItemArticle;