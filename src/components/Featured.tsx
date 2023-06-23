import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card1 from "./Card";

const Featured = () => {
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

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/kitab")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(json);
            });
    }, []);

    return (
        <Box
            sx={{
                paddingX: "24px",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#fc6a03",
                    mt: "50px",
                    fontWeight: "bold",
                    fontFamily: "DMSerif",
                }}
            >
                Featured Collections
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    color: "rgba(255,255,255, .5)",
                    mt: "10px",
                    fontFamily: "Comfortaa Bold",
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Quos blanditiis tenetur
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "50px",
                    flexWrap: "wrap",
                }}
            >
                {data.slice(0,10).map((item: Data) => (
                    <Card1
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        image={item.image}
                        page={item.page}
                        genre={item.genre}
                        raiting={item.raiting}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Featured;
