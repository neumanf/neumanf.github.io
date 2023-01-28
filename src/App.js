import { Container } from "@mantine/core";
import { MantineProvider } from "@mantine/styles";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { Navbar } from "./components/Navbar";
import en from "./translations/en.json";
import ptBr from "./translations/pt-br.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: ptBr,
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  returnObjects: true,

  interpolation: {
    escapeValue: false,
  },
});

export default function App({ child }) {
  return (
    <MantineProvider
      theme={{
        primaryColor: "red",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Navbar />
      <Container py="xl">{child}</Container>
    </MantineProvider>
  );
}
