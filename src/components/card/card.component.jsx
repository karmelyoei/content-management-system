import React, { Fragment } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import ArticleScreen from "../article-screen/article-screen.component";

const Carditem = ({
  index,
  headline,
  image,
  content,
  description,
  handleEdit,
  handleDelete,
  categoryIndex,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div>
        <Card
          sx={{
            maxWidth: 255,
            maxHeight: 271,
          }}
        >
          <CardActionArea onClick={handleClick}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent sx={{ maxHeight: 35 }}>
              <Typography
                gutterBottom
                sx={{ fontSize: 11, textAlign: "center" }}
                component="div"
              >
                {headline}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "space-evenly" }}>
            <Button
              size="small"
              onClick={() => handleEdit(index, categoryIndex)}
            >
              Edit
            </Button>
            <Button
              size="small"
              onClick={() => handleDelete(index, categoryIndex)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
      <ArticleScreen
        open={open}
        handleClose={handleClose}
        content={content}
        description={description}
      />
    </Fragment>
  );
};

export default Carditem;
