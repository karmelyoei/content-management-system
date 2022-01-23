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
    open: false,
    time: "",
    image: "",
    description: "",
    content: "",
    title: "",
  };

  // when user click add icon button it open the popupscreen
  handleClick = () => {
    this.setState({ ...this.state, open: true });
  };

  // close the popup screen of addbuttn
  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };

  // get the ifno from the user of new article insertion
  handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    console.log("name", name);
    this.setState({ ...this.state, [name]: e.target.value });
  };

  // get the articles from the newsapi 
  componentDidMount() {
    const teslaUrl =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-12-23&sortBy=publishedAt&apiKey=15845680d21e44368607fb33f05acc13";

    const techCrunchURL =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=15845680d21e44368607fb33f05acc13";
    // get the articles from https://newsapi.org/ API categorery 1
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

          let data = new Response(JSON.stringify(this.teslaArticles));

          if ("caches" in window) {
            // Opening given cache and putting our data into it
            caches.open("teslaArticles").then((cache) => {
              cache.put("https://localhost:3000", data);
            });
          }

          return this.setState({
            teslaArticles: teslaArticles,
          });
        });
      })
      .catch((error) => console.log(error));
    // get the articles from https://newsapi.org/ API categorery 2
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

  // edit the article
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

  // delete the article
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

  // add new article
  handleAdd = (categoryIndex) => {
    console.log("cat", categoryIndex);
    console.log("title", this.state);
    if (categoryIndex === 1) {
      let teslaArticles = this.state.teslaArticles;
      teslaArticles.unshift({
        title: this.state.title,
        content: this.state.content,
        description: this.state.description,
        image: this.state.image,
        time: this.state.time,
      });
      this.setState({ ...this.state, teslaArticles });
      this.setState({ ...this.state, open: false });
    } else if (categoryIndex === 2) {
      let techCrunchArticles = this.state.techCrunchArticles;
      techCrunchArticles.unshift({
        title: this.state.title,
        content: this.state.content,
        description: this.state.description,
        image: this.state.image,
        time: this.state.time,
      });
      this.setState({ ...this.state, techCrunchArticles });
      this.setState({ ...this.state, open: false });
    }
  };

  render() {
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
                  handleAdd={this.handleAdd}
                  handleClick={this.handleClick}
                  open={this.state.open}
                  handleClose={this.handleClose}
                  handleChange={this.handleChange}
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
                  handleAdd={this.handleAdd}
                  handleClick={this.handleClick}
                  open={this.state.open}
                  handleClose={this.handleClose}
                  handleChange={this.handleChange}
                />
              );
          })
        )}
      </div>
    );
  }
}

export default App;
