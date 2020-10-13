import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 270px;
    width: 100%;
    background: red;
    position: relative;
    overflow: hidden;
`;

export const PreviousButton = styled.div`
    width: 50px;
    height: 35%;
    position: absolute;
    top: 50%;
    border-radius: 5px;
    left: -6px;
    transform: translateY(-50px);
    background: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
`;

export const NextButton = styled(PreviousButton)`
    right: -6px;
    left: unset;
`;

export const Icon = styled.img`
    width: 24px;
    transform: ${({direction}) => direction === 'left' && 'rotate(180deg)'};
`;

export const Slide = styled.img`
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    object-fit: cover;
`;