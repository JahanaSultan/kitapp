import { Typography, Box, Drawer, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import CartCard from "./CartCard";
import { toggleSideBar } from "../features/sideBarSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const sideBar = useSelector((state: RootState) => state.sideBar);
  return (
    <Drawer
      anchor="right"
      open={sideBar.sideBar}
      onClose={() => dispatch(toggleSideBar())}
      sx={{
        top: "65px",
        "& .MuiBackdrop-root": {
          top: "65px",
        },
        "& .MuiPaper-elevation16.MuiDrawer-paper": {
          top: "65px",
          width: "350px",
          height: "calc(100vh - 65px)",
        },
      }}
    >
      <Box role="presentation">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            borderBottom: "1px solid",
            borderColor: "primary.light",
            paddingY: "10px",
            fontFamily: "Comfortaa Bold",
            color: "primary.main",
          }}
        >
          Cart
        </Typography>
        {cart.cart.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            author={item.author}
            price={item.price}
          />
        ))}
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingY: "10px",
            fontFamily: "Comfortaa Bold",
            color: "primary.main",
          }}
        >
          Total: {cart.totalPrice}₼
        </Typography>
        <Button
          sx={{
            backgroundColor: "primary.dark",
            color: "text.primary",
            margin: "0 auto",
            width: "90%",
            display: "block",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Cart;
