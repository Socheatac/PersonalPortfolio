import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import Particles from "react-particles-js";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.5",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div">
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

        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget leo lacus. Sed malesuada, mi et molestie
                    molestie, massa erat scelerisque metus, non ullamcorper
                    tortor lorem vel leo.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Like Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {/* proj 2 */}
        <br />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget leo lacus. Sed malesuada, mi et molestie
                    molestie, massa erat scelerisque metus, non ullamcorper
                    tortor lorem vel leo.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Like Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/* proj 3 */}
        <br />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget leo lacus. Sed malesuada, mi et molestie
                    molestie, massa erat scelerisque metus, non ullamcorper
                    tortor lorem vel leo.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Like Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
