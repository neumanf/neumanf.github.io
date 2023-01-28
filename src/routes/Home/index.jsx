import {
  Button,
  Group,
  Image,
  Stack,
  Text,
  keyframes,
  Container,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles } from "@mantine/styles";
import { Link } from "react-router-dom";
import { BrandGithub, Mail } from "tabler-icons-react";
import { ProjectsCarousel } from "../../components/ProjectsCarousel";
import { useTranslation } from "react-i18next";

const floating = keyframes({
  "0%": { transform: "translate(0,  0px)" },
  "50%": { transform: "translate(0, 20px)" },
  "100%": { transform: "translate(0, -0px)" },
});

const useStyles = createStyles(() => ({
  heroTitle: {
    fontSize: 32,
  },
  floating: {
    animation: `${floating} 3s ease-in-out infinite`,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const { t } = useTranslation();

  const getSocialMedia = () => (
    <>
      <Button
        component="a"
        href="https://github.com/neumanf"
        target="_blank"
        variant="outline"
        color="dark"
        style={{ padding: "0 0.5em" }}
      >
        <BrandGithub />
      </Button>
      <Button
        component="a"
        href="mailto:fabricionewman@gmail.com"
        variant="outline"
        color="dark"
        style={{ padding: "0 0.5em" }}
      >
        <Mail />
      </Button>
    </>
  );

  return (
    <>
      <Group position="apart">
        <Stack align="flex-start">
          <Text className={classes.heroTitle} weight="900">
            <Text className={classes.heroTitle} color="red">
              {t("home.title.first")}
            </Text>{" "}
            {t("home.title.second")}
          </Text>
          <Group>
            <Button component="a" href="mailto:fabricionewman@gmail.com">
              {t("home.contact-me")}
            </Button>
            <Button component={Link} to="/projects" variant="outline">
              {t("home.browse-projects")}
            </Button>
          </Group>
        </Stack>
        <div className={classes.floating}>
          <Image
            width={isDesktop ? 400 : "100%"}
            src="/assets/images/hero.png"
            alt="Boy with laptop"
          />
        </div>
        {isDesktop ? (
          <Stack>{getSocialMedia()}</Stack>
        ) : (
          <Group>{getSocialMedia()}</Group>
        )}
      </Group>
      <Container py={50} />
      <Group position="apart" py={15}>
        <Text weight="bold">{t("home.recent-projects")}</Text>
        <Text component="a" href="#/projects" color="red" size="sm">
          {t("home.see-all")}
        </Text>
      </Group>
      <ProjectsCarousel />
    </>
  );
}
