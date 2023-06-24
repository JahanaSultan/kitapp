import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { FC } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

interface CartCardProps {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
}

const CartCard: FC<CartCardProps> = ({ id, image, title, author, price }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        height: 150,
        padding: "10px",
        border: "1px solid #cccc",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          color: "red",
          padding: 0,
        }}
        onClick={() => dispatch(removeFromCart(id))}
      >
        <ClearOutlinedIcon />
      </IconButton>
      <CardMedia
        component="img"
        image={image}
        alt="book image"
        sx={{
          flex: 1,
          height: "100%",
          objectFit: "contain",
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Comfortaa Bold",
            fontSize: "16px",
            color: "#fc6a03",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontFamily: "Comfortaa Bold",
          }}
        >
          {author}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontFamily: "Comfortaa Bold",
          }}
        >
          {price}₼
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartCard;
