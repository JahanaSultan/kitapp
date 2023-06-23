import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import header from '../assets/img/header.webp'
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../features/modalSlice';

const Header = () => {
    // open modal

    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(modalOpen());
    };

    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 64px)",
            display: "flex",
            paddingX: "24px"
        }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h1" sx={{
                    color: "#fff",
                    fontFamily: "Comfortaa Bold",
                    fontSize: "4rem",
                    paddingTop: "10%"
                }}>
                    Get Your New
                </Typography>
                <Typography variant="h1" sx={{
                    color: "#fff",
                    fontFamily: "Comfortaa Bold",
                    fontSize: "4rem",
                    position: "relative",
                    '&::after': {
                        content: '""',
                        position: "absolute",
                        width: "180px",
                        height: "5px",
                        backgroundColor: "#fc6a03",
                        bottom: "-10px",
                        left: "0px"
                    }
                }}>
                    Book Collections
                </Typography>
                <Typography variant="h5" sx={{
                    color: "#fff",
                    mt: "50px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant="h5" sx={{
                    color: "#fff"
                }}>
                    Quos blanditiis tenetur
                </Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "50px"
                }}>
                    <Button variant="outlined" sx={{
                        border: "1px solid #fff",
                        padding: "20px 40px",
                        color: "#fff",
                        borderRadius: "100vmax",
                        '&:hover': {
                            backgroundColor: "#fc6a03",
                            color: "#fff",
                            border: "1px solid #fc6a03"
                        }

                    }}>Explore More <ShoppingCartIcon sx={{ ml: "20px" }} />
                    </Button>
                    <Button variant="outlined" sx={{
                        border: "1px solid #fc6a03",
                        width: "64px", height: "64px",
                        borderRadius: "100vmax",
                        color: "#fc6a03",
                        animation: "pulse 2s infinite",
                        ml: "50px",
                        '&:hover': {
                            backgroundColor: "#fc6a03",
                            color: "#fff",
                            border: "1px solid #fc6a03"
                        }
                    
                    }}
                    onClick={handleOpen}
                    >
                        <PlayArrowIcon sx={{ fontSize: 35 }} />
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                flex: 1,
                textAlign: "end"
            }}>
                <img src={header} alt="bookshelf" height="auto" width='450px' />
            </Box>
            <Modal />
        </Box>
    )
}

export default Header