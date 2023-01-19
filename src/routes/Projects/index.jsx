import { Grid } from "@mantine/core";

import { ProjectCard } from "./components/ProjectCard";

export default function Projects() {
  return (
    <Grid>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image={"/assets/images/mally.png"}
          title="Mally"
          description="A collection of web services such as URL shorteners, pastebins, and many more."
          badges={["TypeScript", "React", "NextJS", "NestJS", "MySQL"]}
          liveLink="https://mally.vercel.app"
          sourceLink="https://github.com/neumanf/mally"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image={"/assets/images/vagastechrnbot.png"}
          title="Vagas Tech RN Bot"
          description="Manages the Vagas Tech RN channel on Telegram."
          badges={["TypeScript", "Express", "grammY", "MySQL"]}
          liveLink="https://t.me/s/vagastechrn"
          sourceLink="https://github.com/neumanf/vagastechrnbot"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image={"/assets/images/clean-ecommerce.png"}
          title="Clean E-commerce"
          description="E-commerce/E-shop website capable of list, filter and order products, as well as notify users when a product is unavailable."
          badges={["TypeScript", "React", "NextJS", "NestJS", "PostgreSQL"]}
          sourceLink="https://github.com/neumanf/clean-ecommerce"
        />
      </Grid.Col>
      <Grid.Col md={4} lg={4}>
        <ProjectCard
          image="/assets/images/image-deblur-tool.png"
          title="Image Deblur Tool"
          description="Application capable of restoring blurred images."
          badges={["OpenCV", "Python", "FastAPI", "React"]}
          liveLink="https://image-deblur-tool.vercel.app"
          sourceLink="https://github.com/neumanf/image-deblur-tool"
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
