import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import me from "../assets/images/me.jpg";

const styles = {
  image: {
    height: 0,
    paddingTop: "100%",
  },
};

function About() {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={3}>
        <Card>
          <CardHeader title="Kevin Wu" subheader="December 30, 1997" />
          <CardMedia style={styles.image} image={me} title="Kevin" />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography component="h1">Hello, my name is Kevin Wu.</Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              I graduated from Villanova University with a degree in Mechanical
              Engineering. Some of my hobbies include gaming and drawing. I am
              currently based in New York City.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
