import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMode } from "../../theme";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};
const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  const { colors } = useMode();
  return (
    <Box>
      <Typography variant="h1" fontWeight={"600"}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" color={colors.greenAccent[500]}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default PageTitle;
