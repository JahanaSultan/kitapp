import { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
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
        mb: "10px",
        position: "relative",
        bgcolor: "#00001a",
        border: "1px solid rgba(255,255,255, .2)",
        transition: "0.5s",
        "&:hover": {
          bgcolor: "#000047",
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
            color: "#fff",
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
            color: "#fc6a03",
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
            color: "#fc6a03",
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
            color: "#fc6a03",
            height: "80px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          {title} - {author}
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "center", color: "#fff" }}>
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
