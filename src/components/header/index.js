import React from 'react';
import {
    Container,
    Logo,
    MainHeader,
    Input,
    Frame,
    Dropdown,
    Cart,
    Form,
    Button,
    DropdownTitle,
    DropdownOption,
    DropdownOptionContainer,
    DropdownCarrot
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
    return <Logo {...restProps} />;
}

Header.MainHeader = function HeaderLogo({ children, ...restProps }) {
    return <MainHeader {...restProps}>{children}</MainHeader>;
}

Header.Input = function HeaderInput({ children, ...restProps }) {
    return <Input {...restProps} />;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Header.DropdownOptionContainer = function HeaderDropdownOptionContainer({ children, ...restProps }) {
    return (
        <DropdownOptionContainer {...restProps}>
            <DropdownCarrot />
            {children}
        </DropdownOptionContainer>
    );
}

Header.DropdownCarrot = function HeaderDropdownCarrot({ children, ...restProps }) {
    return <DropdownCarrot {...restProps} />;
}

Header.DropdownTitle = function HeaderDropdownTitle({ children, ...restProps }) {
    return (
        <DropdownTitle {...restProps}>
            {children}
            <Logo src="../images/icons/header/arrow.svg" />
        </DropdownTitle>
    );
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return (
        <Dropdown {...restProps}>
            {children}
        </Dropdown>
    );
}

Header.DropdownOption = function HeaderDropdownOption({ children, src, ...restProps }) {
    return (
        <DropdownOption {...restProps}>
            {src && <Logo {...restProps} />}
            {children}
        </DropdownOption>
    );
}

Header.Cart = function HeaderCart({ children, ...restProps }) {
    return <Cart {...restProps}>{children}</Cart>;
}

Header.Form = function HeaderForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
}

Header.Button = function HeaderButton({ children, src, ...restProps }) {
    return (
        <Button {...restProps}>
            {src && <Logo src={src} {...restProps} />}
            {children}
        </Button>
    );
}