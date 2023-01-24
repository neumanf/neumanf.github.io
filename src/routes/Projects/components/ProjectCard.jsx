import React from "react";
import { BrandGithub, Eye } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  useMantineTheme,
  Container,
  ScrollArea,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function ProjectCard({
  image,
  title,
  description,
  badges,
  liveLink,
  sourceLink,
  projectPageLink,
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = badges.map((badge) => (
    <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image
          src={image}
          alt={title}
          height={180}
          withPlaceholder={image === null}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text size="lg" weight={600}>
          {title}
        </Text>
        <ScrollArea style={{ width: 300, height: 30 }}>
          <Group spacing={7} mt={5} style={{ width: 500 }}>
            {features}
          </Group>
        </ScrollArea>
        <Text size="sm" mt="xs" lineClamp={2}>
          {description}
        </Text>
        <Container py={5} />
        {projectPageLink && (
          <Text
            component="a"
            href={projectPageLink}
            color="red"
            size="sm"
            mt="xs"
          >
            Read more
          </Text>
        )}
      </Card.Section>

      <Group mt="xs">
        <Button
          disabled={liveLink === undefined}
          leftIcon={<Eye size={18} />}
          component={liveLink ? "a" : null}
          href={liveLink}
          radius="md"
          style={{ flex: 1 }}
          target="_blank"
        >
          Live
        </Button>
        <Button
          leftIcon={<BrandGithub size={18} />}
          variant="outline"
          component="a"
          href={sourceLink}
          radius="md"
          style={{ flex: 1 }}
          target="_blank"
        >
          Source
        </Button>
      </Group>
    </Card>
  );
}
