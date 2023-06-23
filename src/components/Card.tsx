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



interface Data {
  id: number,
  title: string,
  author: string,
  price: number,
  image: string,
  page: number,
  genre: string,
  raiting: number,
}


const Card1: FC<Data> = ({ id, title, author, price, image, page, genre, raiting }) => {

  const [value, setValue] = React.useState<number | null>(2);

  // youtube modal 

  const addToCartHandler = () => {
    addToCart(id, title, author, price, image, page, genre, raiting);
    
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
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              mb: "10px",
            }}
          />
        </Box>
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
      </CardContent>

    </Card>
  );
}

export default Card1