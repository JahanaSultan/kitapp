import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import logo from '../assets/img/logo.svg'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from '@mui/material/Link'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton/IconButton';
import Badge from '@mui/material/Badge/Badge';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from 'react';
 
const Navbar = () => {
    const cart = useSelector((state: RootState) => state.cart);

    //sticky navbar
    const [scroll, setScroll] = useState(false)
    window.addEventListener('scroll', () => {
        window.scrollY > 300 ? setScroll(true) : setScroll(false)
    })

    return (
        <AppBar position={scroll ? 'sticky' : 'static'} sx={{
            borderBottom: "1px solid rgba(255,255,255, .1)",
        }}>
            <Toolbar>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={logo} alt="logo" style={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography variant="h4" sx={{
                        fontFamily: "Comfortaa Bold"
                    }}>
                        itApp
                    </Typography>
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <Link href="#" underline="none" color="inherit">
                        <Typography variant="h6">
                            Home
                        </Typography>
                    </Link>
                    <Link href="" underline='none' color="inherit">
                        <Typography variant="h6">
                            Blog
                        </Typography>
                    </Link>
                    <Link href="" underline='none' color="inherit">
                        <Typography variant="h6">
                            Shop
                        </Typography>
                    </Link>
                    <Link href="" underline='none' color="inherit">
                        <Typography variant="h6">
                            About
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: "flex-end"
                }}>

                    <IconButton>
                        <Badge badgeContent={1} color="secondary" max={10}>
                            <FavoriteBorderOutlinedIcon sx={{
                                fontSize: 40,
                                color: "#fff"
                            }} />
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <Badge badgeContent={cart.cart.length > 0 ? cart.cart.length : 0} color="secondary" max={10}>
                            <ShoppingBagOutlinedIcon sx={{
                                fontSize: 40,
                                color: "#fff"
                            }} />
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <AccountCircleOutlinedIcon sx={{
                            fontSize: 40,
                            color: "#fff"
                        }} />
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar