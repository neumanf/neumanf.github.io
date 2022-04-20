import { Container } from "@mantine/core";
import { MantineProvider } from "@mantine/styles";

import { Navbar } from "./components/Navbar";

const navBarLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/projects",
    label: "Projects",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export default function App({ child }) {
  return (
    <MantineProvider
      theme={{
        primaryColor: "red",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <Navbar links={navBarLinks} />
      <Container py="xl">{child}</Container>
    </MantineProvider>
  );
}
