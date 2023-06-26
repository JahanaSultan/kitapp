import { Box, Typography } from "@mui/material";
import Heading from "./Heading";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";
import { Author } from "../types/types";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Authors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string | null>(null);
  const lang = useSelector((state: RootState) => state.lang.lang);
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
      egstrtgergerge
      <Heading
        h1={lang.heading.writers_h1}
        text={
          lang.heading.writers_p
        }
      />
      {error ? (
        <Typography variant="h5"
          sx={{
            color: "error.main",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          {error}
        </Typography>
      ) : (
        <Splide
          hasTrack={false}
          options={{
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
