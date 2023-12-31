import Heading from "./Heading";
import { Box, Button } from "@mui/material";
import BlogCard from "./BlogCard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useEffect, useState, useContext } from "react";
import { BlogProps } from "../types/types";
import LangContext from "../lang/langContext";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const lang = useContext(LangContext);

  useEffect(() => {
    try {
      fetch("http://localhost:3001/blogs")
        .then((response) => response.json())
        .then((data) => setBlogs(data));
    }
    catch (error) {
      setError("Error accured while fetching data");
    }
  }, []);


  return (
    <Box
      sx={{
        paddingX: "24px",
      }}
    >
      <Heading
        h1={lang.heading.blogs}
        text={lang.heading.blogs_p}
      />
      <Box
        sx={{
          display: "flex",
          gap: "calc(5% / 3)"
        }}
      >
        {
          blogs.slice(0,5).map((blog: BlogProps) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} about={blog.about} image={blog.image} />
          ))
        }
      </Box>
        <Button
          variant="contained"
          sx={{
            width: "250px",
            height: "40px",
            bgcolor: "primary.dark",
            color: "text.primary",
            margin: "50px auto",
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

export default Blogs;
