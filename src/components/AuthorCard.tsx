import { Card } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { FC } from 'react';



export interface Data {
    id: number,
    name: string,
    image: string,
    about: string,
  }

const AuthorCard: FC<Data> = ({id, name, image, about}) => {
    return (
        <Card sx={{
            width: '100%',
            height: '300px',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255, .2)',
            backgroundColor: '#00001a',
            padding: '10px',
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40%',
                width: '100%',
                "& img": {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '5px solid #fc6a03',
                }
            }}>
                <img src={image} alt="writer img" />
            </Box>

            <Typography variant="h6" sx={{
                textAlign: 'center',
                marginY: '20px',
               fontSize: '18px',
               color: '#fc6a03',
               fontFamily: "DMSerif",
            }}>
               {name}
            </Typography>
            <Typography variant="body2" sx={{color:"#ccc"}}
            >
                {about.slice(0, 100) + '...'}
            </Typography>
        </Card>
    );
}

export default AuthorCard;