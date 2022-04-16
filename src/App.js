import { Navbar } from "./components/navbar";

export default function App() {
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
      label: "Contact me",
    },
  ];

  return (
    <>
      <Navbar links={navBarLinks} />
    </>
  );
}
