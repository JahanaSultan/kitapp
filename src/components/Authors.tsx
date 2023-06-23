import { Box } from '@mui/system'
import Heading from './Heading'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Authors = () => {
  return (
    <Box sx={{
      paddingX: "24px",
    }}>
      <Heading h1={'Writers Of The Month'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur'} />

      <Splide hasTrack={false}>
        <SplideTrack>
          <SplideSlide>...</SplideSlide>
        </SplideTrack>
      </Splide>

    </Box>
  )
}

export default Authors