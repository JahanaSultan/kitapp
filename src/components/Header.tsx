import { Box, Typography, Button,  } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import header from '../assets/img/header.webp'
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../features/modalSlice';
import { useContext } from "react";
import LangContext from "../lang/langContext";

const Header = () => {
    const dispatch = useDispatch();
    const lang = useContext(LangContext);
    
    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 64px)",
            display: "flex",
            paddingX: "24px"
        }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h1" sx={{
                    color: "text.primary",
                    fontFamily: "Comfortaa Bold",
                    fontSize: "4rem",
                    paddingTop: "10%"
                }}>
                    {lang.header.h1}
                </Typography>
                <Typography variant="h1" sx={{
                    color: "text.primary",
                    fontFamily: "Comfortaa Bold",
                    fontSize: "4rem",
                    position: "relative",
                    '&::after': {
                        content: '""',
                        position: "absolute",
                        width: "180px",
                        height: "5px",
                        backgroundColor: "primary.dark",
                        bottom: "-10px",
                        left: "0px"
                    }
                }}>
                    {lang.header.h1_2}
                </Typography>
                <Typography variant="h5" sx={{
                    color: "text.primary",
                    mt: "50px"
                }}>
                    {lang.header.p}
                </Typography>
                <Typography variant="h5" sx={{
                    color: "text.primary"
                }}>
                    {lang.header.p2}
                </Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "50px"
                }}>
                    <Button variant="outlined" sx={{
                        border: "1px solid",
                        borderColor: "text.primary",
                        padding: "20px 40px",
                        color: "text.primary",
                        borderRadius: "100vmax",
                        '&:hover': {
                            backgroundColor: "primary.dark",
                            color: "text.primary",
                            border: "1px solid",
                            borderColor: "primary.dark"
                        }

                    }}>{lang.button.explore}<ShoppingCartIcon sx={{ ml: "20px" }} />
                    </Button>
                    <Button variant="outlined" sx={{
                        border: "1px solid",
                        borderColor: "primary.dark",
                        width: "64px", height: "64px",
                        borderRadius: "100vmax",
                        color: "primary.dark",
                        animation: "pulse 2s infinite",
                        ml: "50px",
                        '&:hover': {
                            backgroundColor: "primary.dark",
                            color: "text.primary",
                            border: "1px solid",
                            borderColor: "primary.dark"
                        }
                    
                    }}
                    onClick={()=>dispatch(modalOpen())}
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