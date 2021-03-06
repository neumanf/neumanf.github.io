import { Button, Group, Image, Stack, Text, keyframes } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles } from "@mantine/styles";
import { Link } from "react-router-dom";
import { BrandGithub, Mail } from "tabler-icons-react";

const floating = keyframes({
  "0%": { transform: "translate(0,  0px)" },
  "50%": { transform: "translate(0, 20px)" },
  "100%": { transform: "translate(0, -0px)" },
});

const useStyles = createStyles(() => ({
  heroTitle: {
    fontSize: 36,
  },
  floating: {
    animation: `${floating} 3s ease-in-out infinite`,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery("(min-width: 900px)");

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
      <Button variant="outline" color="dark" style={{ padding: "0 0.5em" }}>
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
              Full-Stack Developer
            </Text>{" "}
            & Computer Eng. Student
          </Text>
          <Button component={Link} to="/projects">
            Browse projects
          </Button>
        </Stack>
        <div className={classes.floating}>
          <Image
            width={400}
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
    </>
  );
}
