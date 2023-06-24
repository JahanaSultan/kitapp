import { Box } from "@mui/system";
import bg from "../assets/img/circle.png";
import cover from "../assets/img/coverbook.webp";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NewBook = () => {
  return (
    <Box
      sx={{
        paddingX: "24px",
        height: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{flex:1, textAlign:"end"}}>
        <Typography variant="h3" sx={{ fontFamily: "Comfortaa Bold", color: "var(--orange)", display:"inline",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    }}>
            Book
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: "Comfortaa Bold", color: "var(--orange)" }}>
        Recommendation
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Comfortaa Bold", color: "var(--orange)" }}>
           Of The Week
        </Typography>
        <Button sx={{
            marginTop:"24px",
            backgroundColor:"var(--orange)",
            padding:"10px 20px",
            borderRadius:"100vmax",
            border:"1px solid var(--orange)",
            color:"white",
            "&:hover": {
                backgroundColor: "transparent",
                color: "var(--orange)",
              },
        }}>
            See all recommendations <ArrowForwardIcon/>
        </Button>
      
      </Box>
      <Box sx={{flex:1, }}>
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
