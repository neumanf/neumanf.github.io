import { Grid } from "@mantine/core";

import { ProjectCard } from "./components/ProjectCard";

export default function Projects() {
  return (
    <Grid>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image="/assets/images/pdi.png"
          title="PDI"
          description="Blog including projects from Digital Image Processing classes."
          badges={["C++", "OpenCV"]}
          liveLink="https://neumanf.github.io/pdi"
          sourceLink="https://github.com/neumanf/pdi"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image="/assets/images/unboreme.png"
          title="Unboreme"
          description="Movies and TV series recommendation website. Choose one or more categories and it will recommend you something based on that."
          badges={["TypeScript", "Svelte", "AdonisJS", "TailwindCSS"]}
          liveLink="https://unboreme.herokuapp.com/"
          sourceLink="https://github.com/neumanf/unboreme"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image={null}
          title="[WIP] Clean Ecommerce"
          description="Ecommerce-like website using Domain Driven Design and Clean Architecture concepts on Backend. You should be able to list, filter and order products."
          badges={["TypeScript", "React", "Express"]}
          sourceLink="https://github.com/neumanf/clean-ecommerce"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image={null}
          title="[WIP] Mnimy"
          description="Mnimy aims to improve your memorization skills through several techniques, while gamefying the process."
          badges={["TypeScript", "React", "NestJS"]}
          sourceLink="https://github.com/neumanf/mnimy"
        />
      </Grid.Col>
    </Grid>
  );
}
