import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Text,
  useMantineTheme,
  Group,
  Image,
  Card,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function ProjectCard({ image, description, title, pageLink }) {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body}>
          <Text className={classes.title} mt="md" mb="xs">
            {title}
          </Text>
          <Text
            transform="uppercase"
            color="dimmed"
            weight={700}
            size="xs"
            mb="xs"
            lineClamp={2}
          >
            {description}
          </Text>
          <Text component="a" href={pageLink} color="red" size="sm">
            {t("projects.read-more")}
          </Text>
        </div>
      </Group>
    </Card>
  );
}

export function ProjectsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const { t } = useTranslation();

  const data = t("projects.data")
    .slice(0, 4)
    .map((project, i) => ({
      image: project.screenshots[0].link,
      title: project.title,
      description: project.description,
      pageLink: "#" + project.pageLink,
    }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProjectCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      styles={{
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      dragFree
    >
      {slides}
    </Carousel>
  );
}
