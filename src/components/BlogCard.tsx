import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { BlogProps } from "../types/types";
import { FC } from "react";
import { Link } from "react-router-dom";

const BlogCard: FC<BlogProps> = ({ id, title, about, image }) => {
  return (
    <Card
      sx={{
        height: "350px",
        width: "19%",
        padding: "5px",
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "primary.contrastText",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: "100%",
          height: "50%",
          objectFit: "cover",
          transition: "0.1s",
        }}
      />
      <Link to="/" style={{
        color: "inherit",
      }}>
        <CardContent
          sx={{
            padding: "5px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.dark",
              lineHeight: "1",
              fontFamily: "DMSerif",
            }}
          >
            {title.slice(0, 50) + "..."}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            mt="10px"
          >
            {about.slice(0, 80) + "..."}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
