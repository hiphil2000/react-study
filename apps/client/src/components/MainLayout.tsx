import * as React from "react";
import classes from "./MainLayout.module.css";
import {HeaderMenu} from "./HeaderMenu.tsx";
import {Container} from "@mantine/core";

type MainLayoutProps = {
    children?: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <Container fluid>
            <HeaderMenu/>
            <div className={classes.content}>
                {children}
            </div>
        </Container>
    )
}