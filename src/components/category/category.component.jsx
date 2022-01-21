import React, { Fragment } from "react";
import { Typography, Grid, LinearProgress } from "@mui/material";
import Carditem from "../card/card.component";

const Category = ({ categoryIndex, title, articles, handleEdit, handleDelete }) => {
  return (
    <Fragment>
      <div className="section">
        <LinearProgress color="secondary" sx={{ margin: 5 }} />
        <Typography variant="h5" align="center" color="secondary">
          {title}
        </Typography>
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
    </Fragment>
  );
};

export default Category;
