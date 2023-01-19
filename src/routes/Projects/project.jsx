import React from "react";
import { Container, Text, Title, Image, Card } from "@mantine/core";

export default function ProjectPage({ title, description, screenshots }) {
  return (
    <>
      <Title>{title}</Title>
      <Container py={3} />
      {description && <Text>{description}</Text>}
      <Container py={10} />
      {screenshots && (
        <>
          <Text size="xl" weight="bold">
            Screenshots
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
