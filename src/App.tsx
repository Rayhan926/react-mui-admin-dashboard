import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useMode } from "./theme";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./views/Dashboard";
import ColorsPalette from "./components/ColorsPalette";
import Team from "./views/Team";
import Contacts from "./views/Contacts";
import Invoices from "./views/Invoices";

const App = () => {
  const { theme } = useMode();
  return (
    <ProSidebarProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Box sx={{ p: "20px", pt: "10px" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/colors" element={<ColorsPalette />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ProSidebarProvider>
  );
};

export default App;
