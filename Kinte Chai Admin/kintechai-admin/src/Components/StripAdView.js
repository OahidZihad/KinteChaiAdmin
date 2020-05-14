import React from "react";
import { Box } from "@material-ui/core";

const StripAdView = ({ image, background }) => {
  return (
    <Box>
      <img
        style={{
          height: "100px",
          width: "100%",
          background: background,
          // objectFit: "cover",
        }}
        src={image}
        alt=""
      />
    </Box>
  );
};

export default StripAdView;
