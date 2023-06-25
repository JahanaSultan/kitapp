import { Card, Typography, CardMedia } from "@mui/material";
import { FC } from "react";
import { Author } from "../types/types";

const AuthorCard: FC<Author> = ({ id, name, image, about }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "300px",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "primary.contrastText",
        backgroundColor: "primary.main",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        loading="lazy"
        sx={{
          margin: "auto",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "3px solid",
          borderColor: "primary.dark",
        }}
      ></CardMedia>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginY: "20px",
          fontSize: "18px",
          color: "primary.dark",
          fontFamily: "DMSerif",
        }}
      >
        {name}
      </Typography>
      <Typography variant="body2" color="primary.light">
        {about.slice(0, 100) + "..."}
      </Typography>
    </Card>
  );
};

export default AuthorCard;
