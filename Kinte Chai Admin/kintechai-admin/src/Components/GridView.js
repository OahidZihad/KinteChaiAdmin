import React from "react";
import { Box, Typography, colors } from "@material-ui/core";
import ProductView from "./ProductView";
import { cyan } from "@material-ui/core/colors";

const GridView = (props) => {
  return (
    <Box
      width="500px"
      style={{ background: props.background }}
      bgcolor="white"
      mx="auto"
    >
      <Typography
        variant="h5"
        style={{ paddingLeft: "20px", paddingTop: "16px" }}
      >
        <span style={{ color: cyan[500] }}>{props.title}</span>
        {/* {props.title} */}
      </Typography>
      <Box display="flex" justifyContent="center">
        <ProductView item={props.products[0]} />
        <ProductView item={props.products[1]} />
      </Box>
      <Box display="flex" justifyContent="center">
        <ProductView item={props.products[2]} />
        <ProductView item={props.products[3]} />
      </Box>
    </Box>
  );
};

export default GridView;
