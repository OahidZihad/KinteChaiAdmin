import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { blueGrey } from "@material-ui/core/colors";
// import { Height } from "@material-ui/icons";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     display: "block",
//     maxWidth: 400,
//     overflow: "hidden",
//     width: "100%",
//   },
// }));

const BannerSlider = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.Images.map((step, index) => (
          <div
            key={step.label}
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: blueGrey[400],
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                style={{ width: "100%" }}
                // className={classes.img}
                src={step.image}
                alt=""
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </div>
  );
};

export default BannerSlider;

// function BannerSlider() {
//   const classes = useStyles();
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

// }

// export default BannerSlider;
