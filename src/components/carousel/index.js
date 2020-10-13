import React from 'react';
import {
    Container,
    NextButton,
    PreviousButton,
    Icon,
    Slide
} from './styles/carousel';

export default function Carousel({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Carousel.PreviousButton />
            {children}
            <Carousel.NextButton />
        </Container>
    );
}

Carousel.NextButton = function CarouselNextButton({ children, ...restProps }) {
    return (
        <NextButton {...restProps}>
            <Icon src="../images/icons/right-arrow.svg" />
        </NextButton>
    )

}

Carousel.PreviousButton = function CarouselPreviousButton({ children, ...restProps }) {
    return (
        <PreviousButton {...restProps}>
            <Icon src="../images/icons/right-arrow.svg"  direction="left"/>
        </PreviousButton>
    )
}

Carousel.Slide = function CarouselSlide({ children, ...restProps }) {
    return (
        <Slide {...restProps}>{children}</Slide>
    )
}