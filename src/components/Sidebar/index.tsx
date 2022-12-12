import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useMode } from "../../theme";
import { sidebarLinks } from "../../data/sidebarLinks";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { colors, isDarkMode } = useMode();
  return (
    <Stack direction={"column"} bgcolor={colors.primary[400]}>
      {/** Sidebar Header --Start-- */}
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        px={6}
        py={4}
        alignItems="center"
      >
        <Typography variant="h4">ADMIN</Typography>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Stack>
      {/** Sidebar Header --End-- */}

      {/** Profile Picture --Start-- */}
      <Stack alignItems={"center"} mt={5}>
        <Avatar src="/img/rayhan-ahmed.jpg" sx={{ width: 110, height: 110 }} />
        <Typography variant="h3" fontWeight={"bold"} mt={3} mb={1}>
          Rayhan Ahmed
        </Typography>
        <Typography color={colors.greenAccent[500]}>
          Frontend Developer
        </Typography>
      </Stack>
      {/** Profile Picture --End-- */}

      {/** Links --Start-- */}
      <Box mt={5}>
        {sidebarLinks.map(({ links, title }, i) => (
          <Box key={i} mb={3}>
            {title && (
              <Typography mb={1} sx={{ opacity: 0.6 }} ml={7}>
                {title}
              </Typography>
            )}

            {links.map((link, index) => {
              const isActive = pathname === link.url;
              return (
                <Link
                  key={index}
                  to={link.url}
                  style={{ textDecoration: "none" }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    px={10}
                    gap={4}
                    py={3.5}
                    sx={{
                      position: "relative",
                      color: isActive
                        ? colors.greenAccent[400]
                        : colors.primary[200],
                      bgcolor: isActive
                        ? isDarkMode
                          ? colors.primary[500]
                          : "white"
                        : "",
                      "&:hover": {
                        bgcolor: isDarkMode ? colors.primary[500] : "white",
                      },
                      ...(isActive
                        ? {
                            "&:before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: 4,
                              borderRadius: "0 4px 4px 0",
                              height: "100%",
                              bgcolor: colors.greenAccent[400],
                            },
                          }
                        : {}),
                    }}
                    // bgcolor="red"
                  >
                    {isActive ? link.iconActive : link.icon}
                    <Typography variant="h5">{link.text}</Typography>
                  </Stack>
                </Link>
              );
            })}
          </Box>
        ))}
      </Box>
      {/** Links --End-- */}
    </Stack>
  );
};

export default Sidebar;
