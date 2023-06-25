import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Box,
  Typography,
  Rating,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { RootState } from "../store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Book } from "../types/types";

const Card1: FC<Book> = ({
  id,
  title,
  author,
  price,
  image,
  genre,
  raiting,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const addToCartHandler = () => {
    dispatch(addToCart({ id, title, author, price, image, genre, raiting }));
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card
      sx={{
        width: "19%",
        mb: 2,
        position: "relative",
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "primary.contrastText",
        transition: 1,
        "&:hover": {
          boxShadow: "0px 0px 20px 0px rgba(134, 134, 171, 1)",
        },
        "&:hover .MuiCardMedia-root": {
          transform: "perspective(1000px) rotateY(0deg)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15px",
          left: "15px",
          backgroundColor: "#fc6a03",
          zIndex: 1000,
          padding: "3px 10px",
          borderRadius: "100vmax",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontSize: "14px",
          }}
        >
          {genre}
        </Typography>
      </Box>
      {cart.cart.find((book) => book.id === id) ? (
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "primary.dark",
            zIndex: 1000,
            padding: 0,
          }}
          onClick={removeFromCartHandler}
        >
          <ShoppingCartIcon sx={{ ml: "5px", fontSize: 30 }} />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "primary.dark",
            zIndex: 1000,
            padding: 0,
          }}
          onClick={addToCartHandler}
        >
          <AddShoppingCartOutlinedIcon sx={{ ml: "5px", fontSize: 30 }} />
        </IconButton>
      )}

      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          transition: "0.5s",
          transform: "perspective(1000px) rotateY(30deg)",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "180px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            color: "primary.dark",
            height: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          {title} - {author}
        </Typography>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "text.primary" }}
        >
          {price} ₼
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Rating
            name="read-only"
            readOnly
            defaultValue={raiting}
            precision={0.5}
            size={"small"}
            sx={{
              mb: "10px",
              ".MuiRating-iconEmpty svg": {
                fill: "#ffffff4b",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Card1;
