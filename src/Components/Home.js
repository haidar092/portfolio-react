import React from "react";
import image2 from "../images/home.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typed from "react-typed";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";
const Home = () => {
  return (
    // <!-- home section starts  -->
    <Box className="home section" id="home">
      <Grid className="content" spacing={1}>
        <Grid className="user">
          <img src={image2} alt="" srcset="" />
        </Grid>
        <Typography variant="span" className="hi">
          
          hi there...
        </Typography>
        <Typography variant="h3" mt={2}>
          i am <Typography variant="span"> haidar Ali </Typography>
        </Typography>
        <Grid>
          <Typography variant="h3" mt={2}>
            i am {""}
            <Typed
              strings={[
                " web designer",
                " front end developer",
                " react developer",
                "  photographer",
              ]}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </Typography>
        </Grid>

        <Link
          spy
          smooth
         offset={-32}
          activeclassName="active"
          component={Link}
          to="about"
        >
          
          <Button className="btn">
            about me <ManageAccountsIcon sx={{ fontSize: "3rem ", paddingLeft:"6px" }}  />
          </Button>
        </Link>

        <Grid className="center">
          <Grid className="share">
            <Link>
              <FacebookIcon fontSize="lg" />
            </Link>

            <Link>
              <TwitterIcon fontSize="lg" />
            </Link>
            <Link>
              <InstagramIcon fontSize="lg" />
            </Link>
            <Link>
              <PinterestIcon fontSize="lg" />
            </Link>
            <Link>
              <LinkedInIcon fontSize="lg" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
