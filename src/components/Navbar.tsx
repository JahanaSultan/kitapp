import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "../assets/img/logo.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton/IconButton";
import Badge from "@mui/material/Badge/Badge";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../features/sideBarSlice";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  //sticky navbar
  const [scroll, setScroll] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 300 ? setScroll(true) : setScroll(false);
  });

  return (
    <AppBar
      position={scroll ? "sticky" : "static"}
      sx={{
        borderBottom: "1px solid",
        borderColor: "primary.contrastText",
        bgcolor: "primary.main",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Typography
            variant="h4"
            color="text.primary"
            sx={{
              fontFamily: "Comfortaa Bold",
            }}
          >
            itApp
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/">
            <Typography variant="h6" color="text.primary">
              Home
            </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6" color="text.primary">
              Blog
            </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6" color="text.primary">
              Shop
            </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6" color="text.primary">
              About
            </Typography>
          </NavLink>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={() => dispatch(toggleSideBar())}>
            <Badge
              badgeContent={cart.cart.length > 0 ? cart.cart.length : 0}
              color="secondary"
              max={10}
              sx={{
                "& .MuiBadge-badge": {
                  color: "text.primary",
                },
              }}
            >
              <ShoppingBagOutlinedIcon
                sx={{
                  fontSize: 40,
                  color: "text.primary",
                }}
              />
            </Badge>
          </IconButton>
          {/* cart drawer */}
          <Cart />
          <IconButton>
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: 40,
                color: "text.primary",
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
