import React from "react";
import { Box, Button, Typography } from "@mui/material";
import heroBannerImg from "../assets/Images/banner.png";
import {Link} from "react-router-dom";

const HeroBanner = () => {

    let exerciseScroll = () => {
        let exerciseElement = document.getElementById("exercises");

        if(exerciseElement){
            exerciseElement.scrollIntoView({behavior : 'smooth'});
        }
    }

  return (
    <Box
      sx={{
        mt: { xs: "70px", lg: "110px" },
        ml: { sm: "50px" },
        p: "20px",
        position: "relative",
      }}
    >
      <Typography fontSize={"26px"} fontWeight={"600"}>
        Fitness Club
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "40px", lg: "44px" },
          mb: "17px",
          mt: "23px",
          lineHeight: "1.3",
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={"20px"} lineHeight={"1.4"} mb={3}>
        Check out the most effective exercises
      </Typography>

        <Button
          variant="contained"
          color="error"
          sx={{ backgroundColor: "#ff2625", padding: "10px" }}
          onClick={exerciseScroll}
        >
          Explore Exercises
        </Button>
      <Typography
        sx={{
          fontSize: "200px",
          display: { xs: "none", lg: "block" },
          color: "#ff2625",
          opacity: "0.1",
          marginTop: "-40px",
        }}
      >
        Exercises
      </Typography>

      <img src={heroBannerImg} className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
