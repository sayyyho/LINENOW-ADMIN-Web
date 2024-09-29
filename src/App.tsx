// styles
import { GlobalStyle, theme } from "@linenow/design-system";
import { ThemeProvider } from "styled-components";

// routers
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LocalStyle from "@styles/local";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LocalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
