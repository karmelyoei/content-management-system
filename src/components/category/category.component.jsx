import React, { Fragment } from "react";
import { Typography, Grid, LinearProgress, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Carditem from "../card/card.component";
import AddArticle from "../add-article/add.component";

const Category = ({
  categoryIndex,
  title,
  articles,
  handleEdit,
  handleDelete,
  handleAdd,
  handleChange,
  open,
  handleClose,
  handleClick,
}) => {
  return (
    <Fragment>
      <div className="section">
        <LinearProgress color="secondary" sx={{ margin: 5 }} />
        <Typography variant="h5" align="center" color="secondary">
          {title}
        </Typography>

        <IconButton
          color="primary"
          aria-label="add picture"
          component="span"
          size="large"
          sx={{ position: "relative", left: "1006px" }}
          onClick={handleClick}
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <Grid container spacing={1} sx={{ margin: "10px 0px 0px 37px" }}>
          {articles.map((article, index) => {
            return (
              <Grid item xs={4} kay={index}>
                <Carditem
                  index={index}
                  headline={article.title}
                  image={article.image}
                  content={article.content}
                  description={article.description}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  categoryIndex={categoryIndex}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <AddArticle
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleClose={handleClose}
        open={open}
        categoryIndex={categoryIndex}
      />
    </Fragment>
  );
};

export default Category;
