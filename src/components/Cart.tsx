import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartCard from "./CartCard";
import Drawer from "@mui/material/Drawer";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../features/sideBarSlice";
import Button from "@mui/material/Button";

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
        "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
          top: "65px",
        },
        "& .css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
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
            borderBottom: "1px solid #cccc",
            paddingY: "10px",
            fontFamily: "Comfortaa Bold",
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
          }}
        >
          Total: {cart.totalPrice}₼
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingY: "10px",
            fontFamily: "Comfortaa Bold",
          }}
        >
          <Button 
          sx={{
            backgroundColor: "#fc6a03",
            color: "#fff",
            width: "90%",
            margin: "0 auto",
            "&:hover": {
              backgroundColor: "#fc6a03",
            },
            
          }}
          >
            Checkout
          </Button>
        </Typography>

      </Box>
    </Drawer>
  );
};

export default Cart;
