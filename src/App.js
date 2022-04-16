import { Navbar } from "./components/Navbar";

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

export default function App() {
  return (
    <>
      <Navbar links={navBarLinks} />
    </>
  );
}
