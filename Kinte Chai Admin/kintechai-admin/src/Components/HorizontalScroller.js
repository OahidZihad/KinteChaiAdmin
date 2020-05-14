import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProductView from "./ProductView";
import { cyan } from "@material-ui/core/colors";

const HorizontalScroller = (props) => {
  return (
    <Box style={{ background: props.background }} p="16px">
      <Typography variant="h5">
        <span style={{ color: cyan[500] }}>{props.title}</span>
        {/* {props.title} */}
      </Typography>
      <Box display="flex" overflow="auto">
        {props.products.map((item, index) => (
          <ProductView item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalScroller;
