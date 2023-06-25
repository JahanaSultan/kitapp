import { Box } from "@mui/material";
import Heading from "./Heading";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";
import { Author } from "../types/types";


const Authors = () => {


  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/authors")
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json);
      })
      .catch((error) => {
        setError("An error occurred while fetching authors.");
      });
  }, []);

  return (
    <Box
      sx={{
        paddingX: "24px",
        mb: "50px",
      }}
    >
      <Heading
        h1={"Writers Of The Month"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur"
        }
      />
      {error ? (
        <Box
          sx={{
            color: "red",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          {error}
        </Box>
      ) : (
        <Splide
          hasTrack={false}
          options={{
            // type: "loop",
            perPage: 5,
            focus: "center",
            gap: "5px",
            pauseOnHover: true,
            pagination: false,
          }}
        >
          <SplideTrack>
            {authors.slice(0, 10).map((item: any) => (
              <SplideSlide key={item.id}>
                <AuthorCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  about={item.about}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      )}
    </Box>
  );
};

export default Authors;
