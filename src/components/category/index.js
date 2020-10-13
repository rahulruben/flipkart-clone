import React from 'react';
import {
    Container
  } from './styles/category';


export default function Category({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}