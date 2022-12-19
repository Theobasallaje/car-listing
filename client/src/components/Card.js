import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./Card.module.scss";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ margin: '8px', height: "100%" }}>
      <CardActionArea>
        <CardMedia
          className={styles.cardImg}
          component="img"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {props.year} {props.make} {props.model}
          </Typography>
          <Typography variant="body1">
            {`${props.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}mi`}
          </Typography>
          <Typography variant="h6" sx={{ color: '#545B63', fontWeight: "800" }}>
            {`$${props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}