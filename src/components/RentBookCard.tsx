import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Props {
    id: number;
    name: string;
    image: string;
    author: string;
}

const RentBookCard: FC<Props> = ({id, name, image, author}) => {

  return (
    <Card
      sx={{
        height: "200px",
        display: "flex",
        boxShadow: "none",
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
          transition: "all 0.5s ease",
        }}
      />
      <CardContent sx={{
        position: "absolute",
        backgroundColor: "#00001ddd",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {author}
        </Typography>
        </CardContent>
    </Card>
  );
};

export default RentBookCard;
