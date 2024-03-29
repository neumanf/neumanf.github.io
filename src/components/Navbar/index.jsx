import React, { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    "display": "block",
    "lineHeight": 1,
    "padding": "8px 12px",
    "borderRadius": theme.radius.sm,
    "textDecoration": "none",
    "color":
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    "fontSize": theme.fontSizes.sm,
    "fontWeight": 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const links = [
    {
      link: "/",
      label: t("navbar.home"),
    },
    {
      link: "/projects",
      label: t("navbar.projects"),
    },
    {
      link: "https://neumanf.github.io/blog",
      label: t("navbar.blog"),
      isExternal: true,
    },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) =>
    link.isExternal ? (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        to={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        onClick={() => {
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </Link>
    )
  );

  const toggleLanguage = () => {
    const languageToBeSet = language === "en" ? "pt" : "en";
    i18n.changeLanguage(languageToBeSet);
    setLanguage(languageToBeSet);
    localStorage.setItem("language", languageToBeSet);
  };

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Text component={Link} to="/" weight="900" size="xl">
          NF
        </Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Group>
          <ActionIcon variant="outline" onClick={toggleLanguage}>
            {language === "en" ? "🇺🇸" : "🇧🇷"}
          </ActionIcon>

          <Burger
            opened={opened}
            onClick={() => toggle()}
            className={classes.burger}
            size="sm"
          />
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
