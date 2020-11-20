import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { horse, moustache, caleche } from "./images/images";
import { useTransform, useViewportScroll } from "framer-motion";
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "justify",
  },
}));

const cards = [
  {
    image: [moustache],
    title: "SMART",
    description:
      "With access to millions of journeys, you can quickly find people nearby travelling your way.We go everywhere. Literally thousands of destinations. No station required.",
  },
  {
    image: [caleche],
    title: "EASY GOINT",
    description:
      "Enter your exact address to find the perfect ride. Choose who you’d like to travel with. And book!We take the time to get to know our members. All profiles and ratings are checked. IDs are properly verified. So you know who you’re travelling with.",
  },
  {
    image: [horse],
    title: "FAST",
    description:
      "Get to your exact destination, without the hassle. No queues. No waiting around.No need to trek across town, catch a ride leaving near you.",
  },
];

export default function IntroComponent() {
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  const yAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <div style={{ y: yAnim }}>
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              </div>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
