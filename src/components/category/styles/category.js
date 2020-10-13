import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
`;

export const Header = styled.h1`
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-weight: bold;
    font-size: 16px;
    margin: 0;
`;

export const Title = styled.div`
`;

export const Products = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const Product = styled.div`
    width: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImage = styled.img`
    padding: 10px;
    transition: transform 300ms ease-in-out;
    &:hover {
        transform: scale(1.08);
    }
`;


export const ProductTitle = styled.h1`
    font-size: 13px;
`;

export const ProductPrice = styled.p`
    font-size: 13px;
    color: #388e3c;
    margin: 0;
`;

export const ProductSubTitle = styled.p`
    font-size: 13px;
    font-weight: normal;
    color: #8c8c8c;
`;

