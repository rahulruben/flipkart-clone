import React from 'react';
import {
    Container
} from './styles/jumbotron';


export default function Jumbotron({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}