import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
// import Footer from "./Footer";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.5",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Header />
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
      {/* <Footer /> */}
    </>
  );
};

export default Home;
