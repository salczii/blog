import "../globals.css";
import { ThemeProvider } from "../context/Theme-context";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
