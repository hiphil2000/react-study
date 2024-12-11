﻿import {useState} from "react";
import {Burger, Container, Group, Title} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMenu.module.css";

const links = [
    { link: "/about", label: "Features" },
    { link: "/pricing", label: "Pricing" },
    { link: "/learn", label: "Learn" },
    { link: "/community", label: "Community" },
];

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

                <Title order={3}>IMS</Title>
                
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
            </Container>
        </header>
    );
}