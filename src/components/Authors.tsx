import { Box } from '@mui/material'
import Heading from './Heading'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard';



const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/authors")
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json);
      });
  }, []);


  return (
    <Box sx={{
      paddingX: "24px",
      mb: '50px'
    }}>
      <Heading h1={'Writers Of The Month'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur'} />

      <Splide hasTrack={false}
        options={{
          type: 'loop',
          perPage: 5,
          focus: 'center',
          gap: '5px',
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,

          pagination: false,
          
        }}
      >
        <SplideTrack>
          {authors.slice(0, 10).map((item: any) => (
            <SplideSlide key={item.id}>
              <AuthorCard id={item.id} name={item.name} image={item.image} about={item.about} />
            </SplideSlide>)
          )}
        </SplideTrack>
      </Splide>

    </Box>
  )
}

export default Authors