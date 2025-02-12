import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "./theme/theme";
import { Header } from "./layouts/header";
import { Hero } from "./components/hero";
import { Subsection } from "./components/subsection";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container sx={{ bgcolor: Theme.palette.background.default,  px: 4 }}>
        <Header />
        <Hero />
      </Container>
      <Subsection />
    </ThemeProvider>
  );
}

export default App
