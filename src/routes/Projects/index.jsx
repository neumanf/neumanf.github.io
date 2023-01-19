import { Grid } from "@mantine/core";

import { ProjectCard } from "./components/ProjectCard";
import { projectsInfo } from "./projectsInfo";

export default function Projects() {
  return (
    <Grid>
      {projectsInfo.map((project) => (
        <Grid.Col key={project.title} md={4} lg={4}>
          <ProjectCard
            image={project.screenshots[0].link}
            title={project.title}
            description={project.description}
            badges={project.badges}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
            projectPageLink={"#" + project.pageLink}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
