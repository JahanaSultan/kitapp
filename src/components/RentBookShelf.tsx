import { Box } from "@mui/material";
import Heading from "./Heading";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import RentBookCard from "./RentBookCard";
import { useEffect, useState, useContext } from "react";
import { RentProps } from "../types/types";
import LangContext from "../lang/langContext";

const RentBookShelf = () => {
  const [books, setBooks] = useState<RentProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const lang = useContext(LangContext);
  useEffect(() => {
    try {
      fetch("http://localhost:3001/rentbook")
        .then((response) => response.json())
        .then((json) => {
          setBooks(json);
        });
    } catch (error) {
      setError("Error accured while fetching rent books");
    }
  }, []);

  return (
    <Box
      sx={{
        paddingX: "24px",
      }}
    >
      <Heading
        h1={lang.heading.rent}
        text={lang.heading.rent_p}
      />

      <Splide
        hasTrack={false}
        options={{
          perPage: 10,
          focus: "center",
          gap: "5px",
          pauseOnHover: true,
          pagination: false,
          drag: "free",
        }}
      >
        <SplideTrack>
          {books.slice(0, 30).map((item: RentProps) => (
            <SplideSlide key={item.id}>
              <RentBookCard
                id={item.id}
                name={item.name}
                author={item.author}
                image={item.image}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default RentBookShelf;
