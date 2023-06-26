import { Box, Typography, Button } from "@mui/material";
import bg from "../assets/img/circle.png";
import cover from "../assets/img/coverbook.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const NewBook = () => {
  const lang = useSelector((state: RootState) => state.lang.lang);

  return (
    <Box
      sx={{
        paddingX: "24px",
        height: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "end" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Comfortaa Bold",
            color: "primary.dark",
            display: "inline",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          {lang.reccomendation.h1}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Comfortaa Bold", color: "primary.dark" }}
        >
          {lang.reccomendation.h1_2}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Comfortaa Bold", color: "primary.dark" }}
        >
          {lang.reccomendation.h2}
        </Typography>
        <Button
          sx={{
            marginTop: "24px",
            backgroundColor: "primary.dark",
            padding: "10px 20px",
            borderRadius: "100vmax",
            border: "1px solid",
            borderColor: "primary.dark",
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
              color: "primary.dark",
            },
          }}
        >
          {lang.button.reccomendatiton}<ArrowForwardIcon />
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img
          src={cover}
          alt=""
          style={{
            height: "80vh",
            display: "block",
            margin: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default NewBook;
