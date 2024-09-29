// styles
import { theme } from "@linenow/design-system";
import { ThemeProvider } from "styled-components";

// routers
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
