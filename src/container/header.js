import React, { useState } from 'react';
import logo from '../logo.svg';
import { Header, SubHeader } from '../components';
import headerSections from '../fixtures/header';
import subHeaderData from '../fixtures/subheader';

export function HeaderContainer() {
    const [currentItems, setCurrentItems] = useState([]);
    return (
        <Header>
            <Header.MainHeader>
                <Header.Frame left>
                    <Header.Logo src={logo} alt="Flipkart Logo" />
                    <Header.Form>
                        <Header.Input placeholder="Search for products, brands and more"></Header.Input>
                        <Header.Button src="../images/icons/header/magnifying-glass.svg" />
                    </Header.Form>
                </Header.Frame>
                <Header.Frame right>
                    {
                        headerSections.map((section, index) => (
                            <Header.Dropdown key={`${section}-${index}`}>
                                <Header.DropdownTitle>{section.title}</Header.DropdownTitle>
                                <Header.DropdownOptionContainer>
                                    {section.items.map((item, index) => (
                                        <Header.DropdownOption key={`${item}-${index}`}>{item}</Header.DropdownOption>
                                    ))}
                                </Header.DropdownOptionContainer>
                            </Header.Dropdown>
                        ))
                    }
                    <Header.Button src="../images/icons/header/cart.svg">Cart</Header.Button>
                </Header.Frame>
            </Header.MainHeader>
            <SubHeader>
                <SubHeader.SubHeaderWrapper>
                    {
                        subHeaderData.map((section, index) => (
                            <SubHeader.SubHeaderTitle
                                key={index}
                                onMouseEnter={_ => setCurrentItems(section.items)}
                            >{section.title}</SubHeader.SubHeaderTitle>
                        ))
                    }
                    <SubHeader.SubHeaderContainer>
                        {
                            currentItems?.map((item, index) => (
                                <SubHeader.Products key={index}>
                                    {
                                        item?.products.map(product => (
                                            <SubHeader.Product>{product}</SubHeader.Product>
                                        ))
                                    }
                                </SubHeader.Products>
                            ))
                        } 
                    </SubHeader.SubHeaderContainer>
                </SubHeader.SubHeaderWrapper>
            </SubHeader>
        </Header>
    )
}