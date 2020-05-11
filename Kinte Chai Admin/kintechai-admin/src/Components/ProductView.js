import React from "react";
import { Box, Typography } from "@material-ui/core";
import { grey, green } from "@material-ui/core/colors";

const ProductView = () => {
  return (
    <Box p="18px" bgcolor="white" boxShadow="8px" mx="4px" borderRadius="16px">
      <img
        style={{ height: "120px", width: "120px", backgroundColor: grey[50] }}
      />
      <Typography variant="subtitle1" align="center">
        Title
      </Typography>
      <Typography variant="subtitle2" align="center">
        <span style={{ color: green.A700 }}>offer</span>
      </Typography>
      <Typography variant="h6" align="center">
        BDT.24500/=
      </Typography>
    </Box>
  );
};

export default ProductView;
