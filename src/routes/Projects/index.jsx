import { Grid } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { ProjectCard } from "./components/ProjectCard";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.data");

  return (
    <Grid>
      {projects.map((project) => (
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
