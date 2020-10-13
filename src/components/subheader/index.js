import React from 'react';
import {
    Container,
    Title,
    HeaderContainer,
    Wrapper,
    Product,
    Products
} from './styles/subheader';


export default function SubHeader({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

SubHeader.SubHeaderTitle = function SubHeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

SubHeader.SubHeaderContainer = function SubHeaderContainer({ children, ...restProps }) {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>;
}

SubHeader.SubHeaderWrapper = function SubHeaderWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

SubHeader.Products = function SubHeaderProducts({ children, ...restProps }) {
    return <Products {...restProps}>{children}</Products>;
}

SubHeader.Product = function SubHeaderProduct({ children, ...restProps }) {
    return <Product {...restProps}>{children}</Product>;
}


