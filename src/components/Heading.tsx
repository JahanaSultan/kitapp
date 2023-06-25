import { Typography } from "@mui/material";
import { FC } from "react";
import { Box } from "@mui/material";
import { HeadingProps } from "../types/types";

const Heading: FC<HeadingProps> = ({ h1, text }) => {
  return (
    <Box sx={{ mb: 8, mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#fc6a03",
          fontWeight: "bold",
          fontFamily: "DMSerif",
        }}
      >
        {h1}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "rgba(255,255,255, .5)",
          mt: "10px",
          fontFamily: "Comfortaa Bold",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Heading;
