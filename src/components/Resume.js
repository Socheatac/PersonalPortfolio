import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  leftText: {
    textAlign: "left",
  },
  // mainContainer: {
  //   background: "#233",
  // },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "$:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  particlesCanvas: {
    position: "absolute",
    opacity: "0.5",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: { value: 12 },
            density: {
              enable: false,
              value_area: 500,
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
      <Box component="header">
        <Typography variant="h4" align="center" style={{ color: "tomato" }}>
          Working Experiences
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Grid container spacing={3} className={classes.gap}>
            <Grid item xs={4} sm={4}>
              <Typography variant="h2" style={{ color: "tan" }}>
                2020
              </Typography>
              <Typography
                variant="p"
                textAlign="left"
                style={{ color: "tomato" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget leo lacus. Sed malesuada, mi et molestie molestie,
                massa erat scelerisque metus, non ullamcorper tortor lorem vel
                leo. Integer velit elit, mattis vel rutrum in, cursus in diam.
                Donec vehicula lacinia dolor vel sollicitudin. Vestibulum
                lacinia blandit magna eu tincidunt. Nulla eu ante in libero
                sodales porta eget a lectus. In varius est sit amet lacinia
                viverra.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h4" align="center" style={{ color: "tomato" }}>
          Working Experiences
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Grid container spacing={3} className={classes.gap}>
            <Grid item xs={4} sm={4}>
              <Typography variant="h2" style={{ color: "tan" }}>
                2018
              </Typography>
              <Typography
                variant="p"
                textAlign="left"
                style={{ color: "tomato" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget leo lacus. Sed malesuada, mi et molestie molestie,
                massa erat scelerisque metus, non ullamcorper tortor lorem vel
                leo. Integer velit elit, mattis vel rutrum in, cursus in diam.
                Donec vehicula lacinia dolor vel sollicitudin. Vestibulum
                lacinia blandit magna eu tincidunt. Nulla eu ante in libero
                sodales porta eget a lectus. In varius est sit amet lacinia
                viverra.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h4" align="center" style={{ color: "tomato" }}>
          Working Experiences
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Grid container spacing={3} className={classes.gap}>
            <Grid item xs={4} sm={4}>
              <Typography variant="h2" style={{ color: "tan" }}>
                2017
              </Typography>
              <Typography
                variant="p"
                textAlign="left"
                style={{ color: "tomato" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget leo lacus. Sed malesuada, mi et molestie molestie,
                massa erat scelerisque metus, non ullamcorper tortor lorem vel
                leo. Integer velit elit, mattis vel rutrum in, cursus in diam.
                Donec vehicula lacinia dolor vel sollicitudin. Vestibulum
                lacinia blandit magna eu tincidunt. Nulla eu ante in libero
                sodales porta eget a lectus. In varius est sit amet lacinia
                viverra.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
