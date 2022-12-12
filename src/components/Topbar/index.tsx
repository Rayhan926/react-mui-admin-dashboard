import { Box, Button, IconButton, InputBase } from "@mui/material";
import { useMode } from "../../theme";
import {
  Search,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  const { toggleMode, colors, mode } = useMode();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <Search />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display={"flex"} gap={0.5}>
        <IconButton onClick={toggleMode}>
          {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
