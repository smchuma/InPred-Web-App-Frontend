import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { AuthContextProvider } from "./Context/Auth/AuthContext.jsx";
import { UserContextProvider } from "./Context/UserContext/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProjectProvider } from "./Context/ProjectContext/ProjectContext.jsx";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AuthContextProvider>
            <UserContextProvider>
              <ProjectProvider>
                <App />
              </ProjectProvider>
            </UserContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
