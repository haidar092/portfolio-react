import React from "react";
import image3 from "../images/home.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Link } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";
const About = () => {
  return (
    // <!-- about Box starts  -->

    <Box className="about section" id="about">
      <Typography variant="h1" className="heading">
        <Typography variant="span">about</Typography> me
      </Typography>

      <Grid className="row">
        <Grid className="image">
          <img className="tilt" src={image3} alt="" />
        </Grid>
        <Grid className="info">
          <Typography variant="h3">
            <Typography variant="span"> name : </Typography> Haidar Ali
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> age : </Typography> 23
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> qualification : </Typography> BSCS
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> post : </Typography> front end developer
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> language : </Typography> English/Urdu
          </Typography>
          <Link href="HAIDAR ALI.pdf" color="inherit">
            <Button className="btn">
              download CV <DownloadIcon sx={{ fontSize: "3rem " }} />
            </Button>
          </Link>
        </Grid>

        <Grid className="counter">
          <Grid className="box">
            <Typography variant="span">1+</Typography>
            <Typography variant="h3">year of experience</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">10+</Typography>
            <Typography variant="h3">porject completed</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">20+</Typography>
            <Typography variant="h3">happy clients</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">2+</Typography>
            <Typography variant="h3">awards won</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
