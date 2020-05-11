import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProductView from "./ProductView";

const GridView = () => {
  return (
    <Box width="500px" bgcolor="white" mx="auto">
      <Typography
        variant="h5"
        style={{ paddingLeft: "20px", paddingTop: "16px" }}
      >
        Title
      </Typography>
      <Box display="flex" justifyContent="center">
        <ProductView />
        <ProductView />
        <ProductView />
      </Box>
      <Box display="flex" justifyContent="center">
        <ProductView />
        <ProductView />
        <ProductView />
      </Box>
    </Box>
  );
};

export default GridView;
