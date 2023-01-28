import React from "react";
import {
  Container,
  Text,
  Title,
  Image,
  Card,
  Group,
  ActionIcon,
  List,
  Tooltip,
} from "@mantine/core";
import { BrandGithub, Eye } from "tabler-icons-react";
import { useTranslation } from "react-i18next";

export default function ProjectPage({
  project: { title, description, features, screenshots, liveLink, sourceLink },
}) {
  const { t } = useTranslation();

  return (
    <>
      <Group position="apart">
        <Title>{title}</Title>
        <Group>
          <Tooltip label={t("projects.see-live")}>
            <ActionIcon component="a" color="red" href={liveLink}>
              <Eye />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t("projects.source-code")}>
            <ActionIcon component="a" color="red" href={sourceLink}>
              <BrandGithub />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
      <Container py={3} />
      {description && <Text>{description}</Text>}
      <Container py={10} />
      {features && (
        <>
          <Text size="xl" weight="bold" py={5}>
            {t("projects.features")}
          </Text>
          <List>
            {features.map((feature, i) => (
              <List.Item key={i}>{feature}</List.Item>
            ))}
          </List>
          <Container py={10} />
        </>
      )}
      {screenshots && (
        <>
          <Text size="xl" weight="bold">
            {t("projects.screenshots")}
          </Text>
          {screenshots.map((s) => (
            <Card
              key={s.link}
              shadow="sm"
              py={30}
              px={30}
              mt={10}
              mb={30}
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  radius="md"
                  src={s.link}
                  alt={s.caption}
                  caption={s.caption}
                />
              </Card.Section>
            </Card>
          ))}
        </>
      )}
    </>
  );
}
