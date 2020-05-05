import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Drawer from "./UserDashboard";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  //   "@global": {
  //     body: {
  //       backgroundColor: "#d7d6d6",
  //     },
  //   },
}));

function AboutUs(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <div>
        <Container maxWidth="lg">
          <br />
          <main style={{ marginTop: "25px" }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                <Paper style={{ marginTop: "50px" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align={"left"}
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      paddingBottom: "5px",
                    }}
                  >
                    <h1>About Us</h1>
                    <p>
                      Hello and welcome to ClassTime, this webPage provides
                      information about Section D timetable for online classes
                      and gives information about the software used for class.
                    </p>
                    <p>
                      Please use this website to stay updated with the
                      timetable.
                    </p>
                    <p>
                      Kindly don't disturb your CR asking for timetable{" "}
                      <span role="img" aria-label="emojis">
                        😂😂🤙
                      </span>
                    </p>
                  </Typography>
                </Paper>

                <br />
                <br />
              </Grid>
            </Grid>
          </main>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;
