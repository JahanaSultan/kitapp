import Heading from "./Heading";
import { Box } from "@mui/material";

const Blogs = () => {
  return (
    <Box
      sx={{
        paddingX: "24px",
      }}
    >
      <Heading
        h1="Blogs"
        text="Read our blogs to get more information about our services and products."
      />
      <Box 
      sx={{
        display: "flex"
      }}
      >
      </Box>
    </Box>
  );
};

export default Blogs;
