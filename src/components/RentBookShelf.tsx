import { Box } from "@mui/material";
import Heading from "./Heading";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import RentBookCard from "./RentBookCard";
import { useEffect, useState } from "react";

const RentBookShelf = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/rentbook")
        .then((response) => response.json())
        .then((json) => {
          setBooks(json);
        });
    })
    
  return (
    <Box sx={{
        paddingX: "24px",
    }}>
      <Heading
        h1="Rent Book Shelf"
        text="Affordable prices and free return shipping at the end of the rental period."
      />

      <Splide
        hasTrack={false}
        options={{
          // type: "loop",
          perPage: 8,
          focus: "center",
          gap: "5px",
          pauseOnHover: true,
          pagination: false,
          drag   : 'free',
        }}
      >
        <SplideTrack>
            {books.slice(0, 30).map((item: any) => (
          <SplideSlide>
            <RentBookCard id={item.id} name={item.name} author={item.author} image={item.image}/>
          </SplideSlide>
            ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default RentBookShelf;
