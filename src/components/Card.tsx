import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import { Data } from './Featured'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { removeFromCart } from '../features/cartSlice';

const Card1: FC<Data> = ({ id, title, author, price, image, genre, raiting }) => {

  // const [value, setValue] = React.useState<number | null>(2);

  // youtube modal 

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart)
  const addToCartHandler = () => {
    dispatch(addToCart({ id, title, author, price, image, genre, raiting }));
  }
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
  }

  return (
    <Card sx={{
      width: "19%",
      mt: "50px",
      position: "relative",
      bgcolor: "#00001a",
      border: "1px solid rgba(255,255,255, .2)",
      transition: "0.5s",
      '&:hover': {
        bgcolor: "#000047",
        boxShadow: '0px 0px 20px 0px rgba(134, 134, 171, 1)',
      },
      '&:hover .MuiCardMedia-root': {
        transform: "perspective(1000px) rotateY(0deg)",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      },
    }}>
      <Box sx={{
        position: "absolute",
        top: "15px",
        left: "15px",
        backgroundColor: "#fc6a03",
        zIndex: 1000,
        padding: "3px 10px",
        borderRadius: "100vmax",
      }}
      >
        <Typography variant="h6" sx={{
          color: "#fff",
          fontSize: "14px",
        }}
        >
          {genre}
        </Typography>
      </Box>
      <IconButton sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
        color: "#fc6a03",
        zIndex: 1000,
        padding: 0
      }}
      >
        <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          transition: "0.5s",
          transform: "perspective(1000px) rotateY(30deg)",
        }}
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px",

      }}>
        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 'bold', color: "#fc6a03" }}>
          {title} - {author}
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "center", color: "#fff" }}>{price} ₼</Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Rating
            name="simple-controlled"
            value={raiting}
            size={"small"}
            onChange={(event, newValue) => {
              // setValue(newValue);
            }}
            sx={{
              mb: "10px",
              '.MuiRating-iconEmpty svg': {
                fill: "#ffffff4b",
              }
            }}
          />
        </Box>
        {cart.cart.find((book) => book.id === id) ? (
          <Button
          onClick={removeFromCartHandler}
          sx={{
            border: "1px solid #fc6a03",
            borderRadius: "100vmax",
            height: "40px",
            color: "#fc6a03",
            "&:hover": {
              backgroundColor: "#fc6a03",
              color: "#fff",
            },
          }}>
          Remove from cart <DeleteOutlineOutlinedIcon sx={{ ml: "5px", fontSize: 16 }} />
        </Button>
        ) : (
          <Button
          onClick={addToCartHandler}
          sx={{
            border: "1px solid #fc6a03",
            borderRadius: "100vmax",
            height: "40px",
            color: "#fc6a03",
            "&:hover": {
              backgroundColor: "#fc6a03",
              color: "#fff",
            },
          }}>
          Add to cart <AddShoppingCartOutlinedIcon sx={{ ml: "5px", fontSize: 16 }} />
        </Button>
        )}

      </CardContent>

    </Card>
  );
}

export default Card1