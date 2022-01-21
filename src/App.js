import React from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Category from "./components/category/category.component.jsx";
import "./App.css";

class App extends React.Component {
  state = {
    teslaArticles: [],
    techCrunchArticles: [],
    numberOfCategory: [1, 2],
    loading: true,
  };

  componentDidMount() {
    const teslaUrl =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-12-21&sortBy=publishedAt&apiKey=3e7d4184f8d442b89a3415bd1fe8cbc4";

    const techCrunchURL =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3e7d4184f8d442b89a3415bd1fe8cbc4";
    // get the articles from https://newsapi.org/ API
    axios
      .get(teslaUrl)
      .then((response) => {
        this.setState({ ...this.state, loading: false });
        let comingArticles = response.data.articles;
        let { teslaArticles } = this.state;

        comingArticles.map((article) => {
          teslaArticles.push({
            title: article.title,
            content: article.content,
            description: article.description,
            image: article.urlToImage,
            time: "3 min",
          });
          return this.setState({
            teslaArticles: teslaArticles,
          });
        });
      })
      .catch((error) => console.log(error));

    axios
      .get(techCrunchURL)
      .then((response) => {
        let comingArticles = response.data.articles;
        let { techCrunchArticles } = this.state;

        comingArticles.map((article) => {
          techCrunchArticles.push({
            title: article.title,
            content: article.content,
            description: article.description,
            image: article.urlToImage,
            time: "3 min",
          });
          return this.setState({
            teslaArticles: techCrunchArticles,
          });
        });
      })
      .catch((error) => console.log(error));
  }

  handleEdit = (index, categoryIndex) => {
    if (categoryIndex === 1) {
      let teslaArticles = this.state.teslaArticles;
      let teslaArticle = { ...teslaArticles[index] };
      teslaArticle.title = "New Title";
      teslaArticle.content = "this is a new Content of the new";
      teslaArticle.description = "This is a new Description ";
      teslaArticle.image =
        "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA3MzM1ODM4NDEwMDg4/will-smith-attends-varietys-creative-impact-awards-and-10-directors-to-watch-brunch-at-the-parker-palm-springs-on-january-3-2016-in-palm-springs-california-photo-by-jerod-harrisgetty-images.jpg";
      teslaArticle.time = "5 min";
      teslaArticles[index] = teslaArticle;

      this.setState({ ...this.state, teslaArticles });
    } else if (categoryIndex === 2) {
      let techCrunchArticles = this.state.techCrunchArticles;
      let techCrunch = { ...techCrunchArticles[index] };
      techCrunch.title = "New Title";
      techCrunch.content = "this is a new Content of the new";
      techCrunch.description = "This is a new Description ";
      techCrunch.image =
        "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA3MzM1ODM4NDEwMDg4/will-smith-attends-varietys-creative-impact-awards-and-10-directors-to-watch-brunch-at-the-parker-palm-springs-on-january-3-2016-in-palm-springs-california-photo-by-jerod-harrisgetty-images.jpg";
      techCrunch.time = "5 min";
      techCrunchArticles[index] = techCrunch;

      this.setState({ ...this.state, techCrunchArticles });
    }
  };

  handleDelete = (index, categoryIndex) => {
    if (categoryIndex === 1) {
      this.setState({
        teslaArticles: this.state.teslaArticles.filter(function (article, i) {
          return i !== index;
        }),
      });
    } else if (categoryIndex === 2) {
      this.setState({
        techCrunchArticles: this.state.techCrunchArticles.filter(function (
          article,
          i
        ) {
          return i !== index;
        }),
      });
    }
  };

  render() {
    console.log("state", this.state.teslaArticles);

    return (
      <div className="App">
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          align="center"
          sx={{ padding: 5 }}
        >
          Welcome to the CMS Enjoy your reading with us!
        </Typography>
        {this.state.loading ? (
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            align="center"
            sx={{ padding: 5 }}
          >
            Pleas Wait ...IT'S LOADING ...!!!
          </Typography>
        ) : (
          this.state.numberOfCategory.map((category, index) => {
            if (category === 1)
              return (
                <Category
                  key={index}
                  categoryIndex={1}
                  title="Tesla"
                  articles={this.state.teslaArticles}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              );
            else
              return (
                <Category
                  categoryIndex={2}
                  key={index}
                  title="TechCrunch"
                  articles={this.state.techCrunchArticles}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              );
          })
        )}
      </div>
    );
  }
}

export default App;
