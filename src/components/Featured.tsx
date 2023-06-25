import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card1 from "./Card";
import Heading from "./Heading";
import Button from "@mui/material/Button";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Book } from "../types/types";

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
      <Heading
        h1={"Featured Collections"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur"
        }
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.slice(0, 10).map((item: Book) => (
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            width: "250px",
            height: "40px",
            bgcolor: "#fc6a03",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#fc6a03",
              border: "1px solid #fc6a03",
            },
            '&:hover svg': {
                transform: 'translateX(5px)'
            }
          }}
        >
          See More <ArrowForwardOutlinedIcon sx={{transition:"transform 0.5s"}}/>
        </Button>
      </Box>
    </Box>
  );
};

export default Featured;
