import React from 'react';
import {
    Container,
    Header,
    Title,
    Products,
    Product,
    ProductTitle,
    ProductPrice,
    ProductImage,
    ProductSubTitle
  } from './styles/category';


export default function Category({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Category.Header = function CategoryHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

Category.Title = function CategoryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Category.Products = function CategoryProducts({ children, ...restProps }) {
  return <Products {...restProps}>{children}</Products>;
}

Category.Product = function CategoryProduct({ children, ...restProps }) {
  return <Product {...restProps}>{children}</Product>;
}

Category.ProductTitle = function CategoryProductTitle({ children, ...restProps }) {
  return <ProductTitle {...restProps}>{children}</ProductTitle>;
}

Category.ProductImage = function CategoryProductImage({ ...restProps }) {
  return <ProductImage {...restProps} />;
}

Category.ProductPrice = function CategoryProductPrice({ children, ...restProps }) {
  return <ProductPrice {...restProps}>{children}</ProductPrice>;
}

Category.ProductSubTitle = function CategoryProductSubTitle({ children, ...restProps }) {
  return <ProductSubTitle {...restProps}>{children}</ProductSubTitle>;
}

