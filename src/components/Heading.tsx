import { Typography, Box} from "@mui/material";
import { FC } from "react";
import { HeadingProps } from "../types/types";

const Heading: FC<HeadingProps> = ({ h1, text }) => {
  return (
    <Box sx={{ mb: 8, mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "primary.dark",
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
          color: "primary.light",
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
