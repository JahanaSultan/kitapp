import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Button from "@mui/material/Button";

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
        '&:hover .MuiCardContent-root': {
          top: 0,
        }
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
      <CardContent sx={{
        position: "absolute",
        backgroundColor: "#00001ddd",
        width: "100%",
        height: "100%",
        top: '-200%',
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        transition: "all 0.5s ease",
      }}>
        <Typography gutterBottom variant="h6" component="div"
        sx={{
            color: "#fff",
            fontSize: "16px",
            lineHeight: "1",
            borderBottom: "2px solid var(--orange)",
        }}>
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary"
        sx={{
          color: "var(--light-gray)",
        }}
        >
            {author}
        </Typography>
        <Button
        sx={{
          color: "var(--orange)",
          border: "1px solid var(--orange)",
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
