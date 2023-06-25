import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { CartCardProps } from "../types/types";

const CartCard: FC<CartCardProps> = ({ id, image, title, author, price }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        height: "150px",
        padding: "10px",
        borderBottom: "1px solid",
        borderColor: "primary.light",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          color: "error.main",
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
            color: "primary.dark",
          }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" component="div" color="primary.main">
          {author}
        </Typography>
        <Typography variant="subtitle1" component="div" color="primary.dark">
          {price}₼
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartCard;
