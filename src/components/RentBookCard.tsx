import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { FC } from "react";
import { RentProps } from "../types/types";

const RentBookCard: FC<RentProps> = ({ id, name, image, author }) => {
  return (
    <Card
      sx={{
        height: "200px",
        display: "flex",
        boxShadow: "none",
        "&:hover .MuiCardContent-root": {
          opacity: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="book image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "0.1s",
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          backgroundColor: "#00001ddd",
          backdropFilter: "blur(2px)",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          transition: "0.5s",
          opacity: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "text.primary",
            fontSize: "16px",
            lineHeight: "1",
            borderBottom: "2px solid",
            borderColor: "primary.dark",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "primary.light",
          }}
        >
          {author}
        </Typography>
        <Button
          sx={{
            color: "primary.dark",
            border: "1px solid",
            borderColor: "primary.dark",
            width: "100%",
            height: "25px",
            padding: "0",
            marginTop: "10px",
          }}
        >
          Rent
        </Button>
      </CardContent>
    </Card>
  );
};

export default RentBookCard;
