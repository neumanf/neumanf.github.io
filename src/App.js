import { Container } from "@mantine/core";
import { MantineProvider } from "@mantine/styles";

import { Navbar } from "./components/Navbar";

const navBarLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/projects",
    label: "Projects",
  },
  {
    link: "https://neumanf.github.io/blog",
    label: "Blog",
    isExternal: true,
  },
];

export default function App({ child }) {
  return (
    <MantineProvider
      theme={{
        primaryColor: "red",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navbar links={navBarLinks} />
      <Container py="xl">{child}</Container>
    </MantineProvider>
  );
}
