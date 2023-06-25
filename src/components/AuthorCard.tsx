import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { FC } from "react";
import { CardMedia } from "@mui/material";
import { Author } from "../types/types";

const AuthorCard: FC<Author> = ({ id, name, image, about }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "300px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255, .2)",
        backgroundColor: "#00001a",
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
          border: "3px solid var(--orange)",
        }}
      ></CardMedia>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginY: "20px",
          fontSize: "18px",
          color: "#fc6a03",
          fontFamily: "DMSerif",
        }}
      >
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: "#ccc" }}>
        {about.slice(0, 100) + "..."}
      </Typography>
    </Card>
  );
};

export default AuthorCard;
