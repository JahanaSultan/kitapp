import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "24px",
        borderTop: "1px solid",
        borderColor: "primary.contrastText",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" color="text.secondary" fontSize="14px">
        Copyright
      </Typography>
      <Typography variant="h6" color="primary.dark" fontSize="14px" ml="5px">
        KitApp©
      </Typography>
    </Box>
  );
};

export default Footer;
