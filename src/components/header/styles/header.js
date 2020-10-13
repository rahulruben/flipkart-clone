import styled from 'styled-components/macro';

export const Container = styled.header`
    top: 0;
    width: 100%;
`;

export const Logo = styled.img`
    width: 75px;
    cursor: pointer;
`;

export const MainHeader = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 20% 3fr 10% 2fr 20%;
    height: auto;
    padding: 8px;
    background-color: #2874f0;
`;

export const Input = styled.input`
    padding: 10px 15px;
    outline: none;
    border: 0;
    width: 100%;
    &::placeholder {
        font-size: 12px;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 564px;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.23);
`;

export const Button = styled.button`
    background: none;
    outline: none;
    border: 0;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    gap: 7px;
    img {
        width: 17px;
    }
`;



export const Frame = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    grid-column: ${({ left }) => left ? '2/3' : '4/5'};
    @media (max-width: 1000px) {
        grid-column: 1/6;
        grid-row: ${({ right }) => right && '2/3'};
    }
`;

export const DropdownCarrot = styled.div`
    width: 20px;
    height: 20px;
    background-color: #fff;
    transform: translateX(-50%) rotate(45deg);
    position: absolute;
    left: 50%;
    top: -7px;
    z-index: -1;
`;


export const DropdownOptionContainer = styled.div`
    position: absolute;
    transform: translate(-50%, 8px);
    left: 50%;
    width: auto;
    min-width: 250px;
    height: auto;
    box-shadow: 0 0 9px 0px rgba(0,0,0,.23);
    opacity: 0;
    z-index: -1;
    transition: opacity 150ms ease-in-out;
`;

export const DropdownOption = styled.p`
    font-size: 13px;
    padding: 19px 15px;
    margin: 0;
    cursor: pointer;
    background: #fff;
    &:not(:last-child) {
        border-bottom: 1px solid #d3d3d3;
    }
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const DropdownTitle = styled.p`
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    img {
        width: 8px;
        margin-left: 10px;
        transition: transform 150ms linear;
    }
    &:hover {
        img {
            transform: rotate(-180deg);
        }
    }
`;


export const Dropdown = styled.div`
    position: relative;
    &:hover {
        ${DropdownOptionContainer} {
            opacity: 1;
            z-index: 1000;
        }
    }
`;

export const Cart = styled.p`
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
`;

