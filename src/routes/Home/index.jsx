import { Button, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles } from "@mantine/styles";
import { BrandGithub, Mail } from "tabler-icons-react";

const useStyles = createStyles(() => ({
  heroTitle: {
    fontSize: 36,
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
          <Button component="a" href="/projects">
            Browse projects
          </Button>
        </Stack>
        <Image
          width={400}
          src="/assets/images/hero.png"
          alt="Boy with laptop"
        />
        {isDesktop ? (
          <Stack>{getSocialMedia()}</Stack>
        ) : (
          <Group>{getSocialMedia()}</Group>
        )}
      </Group>
    </>
  );
}
