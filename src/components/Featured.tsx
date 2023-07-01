import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Card1 from "./Card";
import Heading from "./Heading";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Book } from "../types/types";
import { useContext } from "react";
import LangContext from "../lang/langContext";

const Featured = () => {
  const [data, setData] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const lang = useContext(LangContext);
  useEffect(() => {
    try {
      fetch("http://localhost:3001/kitab")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    } catch (e) {
      setError("An error occurred while fetching books.");
    }
  }, []);

  return (
    <Box
      sx={{
        paddingX: "24px",
      }}
    >
      <Heading
        h1={lang.heading.featured_h1}
        text={
          lang.heading.featured_p
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
      <Button
          variant="contained"
          sx={{
            width: "250px",
            height: "40px",
            bgcolor: "primary.dark",
            color: "text.primary",
            margin: "50px auto",
            marginBottom: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "transparent",
              color: "primary.dark",
              border: "1px solid",
              borderColor: "primary.dark",
            },
            "&:hover svg": {
              transform: "translateX(5px)",
            },
          }}
        >
          {lang.button.seemore}
          <ArrowForwardOutlinedIcon sx={{ transition: "transform 0.5s" }} />
        </Button>
    </Box>
  );
};

export default Featured;
