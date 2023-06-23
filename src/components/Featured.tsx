import { Box} from "@mui/material";
import { useEffect, useState } from "react";
import Card1 from "./Card";
import Heading from "./Heading";
export interface Data {
    id: number,
    title: string,
    author: string,
    price: number,
    image: string,
    genre: string,
    raiting: number,
}

const Featured = () => {

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
            <Heading h1={'Featured Collections'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur'} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "50px",
                    flexWrap: "wrap",
                }}
            >
                {data.slice(0, 10).map((item: Data) => (
                    <Card1
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        image={item.image}
                        genre={item.genre}
                        raiting={item.raiting}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Featured;
