import React from "react";
import styled from 'styled-components';

const WrappingDiv = styled.div`
  display: grid;
  grid-gap: 15px;
  max-width: ${({theme}) => theme.widths.contentList};
  margin: 0 auto;
`;

export default WrappingDiv;