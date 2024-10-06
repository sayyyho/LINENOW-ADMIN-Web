import { GlobalStyle, theme } from "@linenow/system";

// styles
import LocalStyle from "@styles/local";
import { ThemeProvider } from "styled-components";

// routers
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FullSpinner from "@components/spinner/FullSpinner";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FullSpinner />
        <GlobalStyle />
        <LocalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
