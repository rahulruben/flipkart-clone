import React from 'react';
import { HeaderContainer } from '../container/header';
import { CarouselContainer } from '../container/carousel';
import Category from '../components/category';
import categories from '../fixtures/categories.json';
import { Jumbotron } from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <Jumbotron>
                <CarouselContainer />
                {
                    categories.map(c => (
                        <Category>
                            <Category.Header>
                                <Category.Title>{c.title}</Category.Title>
                            </Category.Header>
                            <Category.Products>
                                {
                                    c.categories.map(p => (
                                        <Category.Product>
                                            <Category.ProductImage src={p.image} />
                                            <Category.ProductTitle>{p.title}</Category.ProductTitle>
                                            <Category.ProductPrice>{p.price}</Category.ProductPrice>
                                            <Category.ProductSubTitle>{p.subtitle}</Category.ProductSubTitle>
                                        </Category.Product>
                                    ))
                                }
                            </Category.Products>
                        </Category>
                    ))
                }
            </Jumbotron>
            <div></div>
        </>
    )
}