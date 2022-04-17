import { MantineProvider } from "@mantine/styles";

import { Navbar } from "./components/Navbar";
import Home from "./routes/Home";

const navBarLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/#about",
    label: "About",
  },
  {
    link: "/#projects",
    label: "Projects",
  },
  {
    link: "/#contact",
    label: "Contact",
  },
];

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "red",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <Navbar links={navBarLinks} />
      <Home />
    </MantineProvider>
  );
}
