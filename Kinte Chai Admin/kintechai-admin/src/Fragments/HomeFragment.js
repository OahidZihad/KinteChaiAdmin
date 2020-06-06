import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Container,
  Backdrop,
  Avatar,
  Fab,
  Dialog,
  Slide,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Toolbar,
  CircularProgress,
} from "@material-ui/core";
import BannerSlider from "../Components/BannerSlider";
import ProductView from "../Components/ProductView";
import HorizontalScroller from "../Components/HorizontalScroller";
import StripAdView from "../Components/StripAdView";
import GridView from "../Components/GridView";
import { loadCategories } from "../Components/Actions/categoryActions";
import { connect } from "react-redux";
import { createStore } from "redux";
import {
  Home,
  Add,
  Category,
  Close,
  Delete,
  ColorLens,
} from "@material-ui/icons";
import { loadCategoryPage } from "../Components/Actions/categoryPageActions";
import { cyan } from "@material-ui/core/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export class HomeFragment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: 0,
      Page: "HOME",
      addDialog: false,
      images: [],
      colors: [],
      view_type: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  componentDidMount() {
    if (this.props.categories === null) {
      this.props.loadCategories(
        () => {
          this.props.loadPage(
            "HOME",
            () => {
              this.setState({ loading: false });
            },
            () => {
              this.setState({ loading: false });
              ////error
            }
          );
        },
        () => {
          this.setState({ loading: false });
          //error handling
        }
      );
    }
  }

  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  removeImage = (index) => {
    let images = this.state.images;
    let colors = this.state.colors;

    images.splice(index, 1);
    colors.splice(index, 1);

    this.setState({
      images,
      colors,
    });
  };

  render() {
    return (
      <div>
        <Container maxWidth="md" fixed>
          <AppBar position="static" color="white">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {this.props.categories
                ? this.props.categories.map((category) => (
                    <Tab
                      icon={
                        <CategoryTab
                          icon={category.icon}
                          title={category.categoryName}
                        />
                      }
                      onClick={(e) => {
                        if (
                          this.props.categoryPages[
                            category.categoryName.toUpperCase()
                          ]
                        ) {
                          this.setState({
                            Page: category.categoryName.toUpperCase(),
                          });
                        } else {
                          this.setState({ loading: true });
                          this.props.loadPage(
                            category.categoryName.toUpperCase(),
                            () => {
                              this.setState({
                                loading: false,
                                Page: category.categoryName.toUpperCase(),
                              });
                            },
                            () => {
                              this.setState({ loading: false });
                              ////error
                            }
                          );
                        }
                      }}
                    />
                  ))
                : null}
            </Tabs>
          </AppBar>

          {this.props.categoryPages
            ? this.props.categoryPages[this.state.Page].map((item, index) => {
                switch (item.view_type) {
                  case 0:
                    let banners = [];
                    for (
                      let index = 1;
                      index < item.no_of_banners + 1;
                      index++
                    ) {
                      const banner = item["banner_" + index];
                      const background =
                        item["banner_" + index + "_background"];
                      banners.push({ banner, background });
                    }
                    return <BannerSlider Images={banners} />;

                  case 1:
                    return (
                      <StripAdView
                        image={item.strip_ad_banner}
                        background={item.background}
                      />
                    );
                  case 2:
                    let products = [];
                    for (
                      let index = 1;
                      index < item.no_of_products + 1;
                      index++
                    ) {
                      let data = {};
                      data["title"] = item["product_title_" + index];
                      data["subtitle"] = item["product_subtitle_" + index];
                      data["price"] = item["product_price_" + index];
                      data["image"] = item["product_image_" + index];
                      products.push(data);
                    }
                    return (
                      <HorizontalScroller
                        products={products}
                        title={item.layout_title}
                        background={item.layout_background}
                      />
                    );
                  case 3:
                    let gridproducts = [];
                    for (let index = 1; index < 5; index++) {
                      let data = {};
                      data["title"] = item["product_title_" + index];
                      data["subtitle"] = item["product_subtitle_" + index];
                      data["price"] = item["product_price_" + index];
                      data["image"] = item["product_image_" + index];
                      gridproducts.push(data);
                    }
                    return (
                      <GridView
                        products={gridproducts}
                        title={item.layout_title}
                        background={item.layout_background}
                      />
                    );
                  default:
                    break;
                }
              })
            : null}

          <Fab
            color="primary"
            aria-label="add"
            onClick={(e) => this.setState({ addDialog: true })}
            style={{ position: "fixed", bottom: "50px", right: "40px" }}
          >
            <Add />
          </Fab>
        </Container>
        <Dialog
          fullScreen
          open={this.state.addDialog}
          onClose={(e) =>
            this.setState({
              addDialog: false,
            })
          }
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={(e) =>
                  this.setState({
                    addDialog: false,
                  })
                }
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6">Add Section</Typography>
              <Button
                autoFocus
                color="inherit"
                style={{ position: "absolute", right: 0 }}
                onClick={(e) =>
                  this.setState({
                    addDialog: false,
                  })
                }
              >
                save
              </Button>
            </Toolbar>
          </AppBar>

          <Toolbar />
          <Box padding="16px">
            <FormControl>
              <InputLabel id="demo-simple-select-label">View Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={this.onFieldChange}
                name="view_type"
                defaultValue={0}
              >
                <MenuItem value={0}>BANNER SLIDER</MenuItem>
                <MenuItem value={1}>STRIP AD</MenuItem>
                <MenuItem value={2}>HORIZONTAL SCROLLER</MenuItem>
                <MenuItem value={3}>GRID VIEW</MenuItem>
              </Select>

              <TextField
                label="Position"
                id="outlined-size-small"
                variant="outlined"
                type="number"
                name="position"
                size="small"
                onChange={this.onFieldChange}
                margin="dense"
              />

              <Box display="flex" flexWrap="true">
                {this.state.images.map((item, index) => (
                  <Box margin="12px">
                    <img
                      src={URL.createObjectURL(item)}
                      style={{
                        height: "90px",
                        width:
                          this.state.view_type === 0
                            ? "160px"
                            : this.state.view_type === 1
                            ? "210px"
                            : 0,
                        objectFit: "scale-down",
                        backgroundColor: this.state.colors[index],
                      }}
                    />
                    <br />
                    <input
                      id={"contained-button-" + index}
                      type="color"
                      hidden
                      onChange={(e) => {
                        let colors = this.state.colors;
                        colors[index] = e.target.value;
                        this.setState({
                          colors,
                        });
                      }}
                      defaultValue="#000000"
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={(e) => this.removeImage(index)}
                    >
                      <Delete />
                    </IconButton>
                    <label htmlFor={"contained-button-" + index}>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <ColorLens />
                      </IconButton>
                    </label>
                  </Box>
                ))}
              </Box>

              <input
                accept="image/*"
                id="contained-button-file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let images = this.state.images;
                    images.push(e.target.files[0]);
                    this.setState({
                      images,
                    });
                  }
                }}
                hidden
                name="images"
                type="file"
              />
              {this.state.view_type === 0 && this.state.images.length < 8 ? (
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Add Image
                  </Button>
                </label>
              ) : null}
              {this.state.view_type === 1 && this.state.images.length < 1 ? (
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Add Image
                  </Button>
                </label>
              ) : null}

              <Box style={{ backgroundColor: this.state.layout_bg }}>
                <TextField id="filled-basic" label="Title" variant="filled" />
              </Box>
              <input
                id={"contained-button-title"}
                type="color"
                hidden
                onChange={this.onFieldChange}
                name="layout_bg"
                defaultValue="#ffffff"
              />
              <label htmlFor={"contained-button-title"}>
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  Select Layout Background
                </Button>
              </label>
            </FormControl>
          </Box>
        </Dialog>
        <Backdrop style={{ zIndex: 1500 }} open={this.state.loading}>
          <CircularProgress color="primary" />
        </Backdrop>
      </div>
    );
  }
}

export const CategoryTab = ({ icon, title }) => {
  return (
    <Box textAlign="center">
      {icon !== "null" ? (
        <img
          alt="Remy Sharp"
          variant="square"
          src={icon}
          style={{ height: "40px", width: "60px" }}
        />
      ) : (
        <Home />
      )}
      <Typography variant="body2" textAlign="center">
        {title}{" "}
      </Typography>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    categoryPages: state.categoryPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (onSuccess, onError) =>
      dispatch(loadCategories(onSuccess, onError)),
    loadPage: (category, onSuccess, onError) =>
      dispatch(loadCategoryPage(category, onSuccess, onError)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFragment);
