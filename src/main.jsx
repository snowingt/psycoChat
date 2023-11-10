import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserProvider } from "./context/UserContext.jsx";

const theme = createTheme({
  palette: {
    primary: {
      light: "#C8E6C9",
      main: "#4CAF50",
      dark: "#033a05",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8BC34A",
    },
    warning: {
      main: "#FF9800",
    },
    error: {
      main: "#F44336",
    },
    light: {
      main: "#C8E6C9",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
