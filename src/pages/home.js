import React from 'react';
import { HeaderContainer } from '../container/header';
import { CarouselContainer } from '../container/carousel';
import Category from '../components/category';

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <div style={{ margin: "10px 8em" }}>
                <CarouselContainer />
                <Category>
                    <Category.Header>
                        <Category.Title></Category.Title>
                        <Category.SubTitle></Category.SubTitle>
                    </Category.Header>
                    <Category.Products>
                        <Category.Product>
                            <Category.ProductImage />
                            <Category.ProductTitle></Category.ProductTitle>
                            <Category.ProductSubTitle></Category.ProductSubTitle>
                            <Category.ProductPrice></Category.ProductPrice>
                        </Category.Product>
                    </Category.Products>
                </Category>
            </div>
            <div></div>
        </>
    )
}