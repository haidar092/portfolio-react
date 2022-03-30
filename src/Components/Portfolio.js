import React from "react";
import { Box, Link } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";

const Portfolio = () => {
  return (
    <Box className="portfolio section" id="portfolio">
      <Typography variant="h1" className="heading">

        my <span>portfolio</span>{" "}
      </Typography>

      <Grid className="box-container">
        <Grid className="box">
          <Link href="https://grocerclone1.netlify.app/">
            <img src="images/cart.png" alt="" />
          </Link>
        </Grid>

        <Grid className="box">
          <Link href="https://incordec.netlify.app/">
            <img src="images/inc.png" alt="" />
          </Link>
        </Grid>

        <Grid className="box">
          <Link href="https://resturant12.netlify.app/">
            <img src="images/res.png" alt="" />
          </Link>
        </Grid>

        <Grid className="box">
          <Link href="https://poortfolio-hadi.netlify.app">
            <img src="images/pf (2).png" alt="" />
          </Link>
        </Grid>
        <Grid className="box">
          <Link href="https://todolist-12.netlify.app">
            <img src="images/todo.png" alt="" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
