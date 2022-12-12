import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useMode } from "../../theme";

const ColorsPalette = () => {
  const { colors } = useMode();
  return (
    <Box p={3}>
      {Object.keys(colors).map((color, i) => (
        <Box mb={3}>
          <Typography mb={0.5}>{color}</Typography>
          <Stack direction={"row"} gap={2} flexWrap="wrap">
            {Object.keys(colors[color]).map((shade, index) => (
              <Box key={index}>
                <Box
                  width={100}
                  height={100}
                  border={"1px solid red"}
                  bgcolor={colors[color][shade]}
                >
                  {/* {shade} */}
                </Box>
                {shade}
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default ColorsPalette;
