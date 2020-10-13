import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 40px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
    display: flex;
    justify-content: center;
    gap: 7em;
    align-items: center;
    font-size: 12px;
    width: 100%;
    font-weight: 600;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    top: 40px;
    width: 92%;
    height: 600px;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
    opacity: 0;
    z-index: -1;
    height: auto;
    transition: all 150ms ease-in-out;
`;

export const Title = styled.div`
    cursor: pointer;
    padding: 14px;
    padding-right: 63px;
    &:hover {
        color: #2874f0;
        & ~ ${HeaderContainer} {
            opacity: 1;
            z-index: 1;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 100%;
    font-weight: 600;
    width: 70%;
    height: 100%;
`;

export const Product = styled.p`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 5px;
    font-weight: normal;
`;

export const Products = styled.div`
    padding: 0 20px;
    margin: 0;
    min-width: 200px;
    &:nth-child(even) {
        background-color: #f9f8f8;
    }
`;