
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import '../App.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 145,
  },
  

});



export default function MediaCard() {
  const classes = useStyles();

  return (


    <div className="container">
      <div className="boxes">
           <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('../images/pill2.jpg')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Prescriptions
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                View All your Prescriptions. Add new medications, or simply delete old ones.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Link to={'/prescriptions'}>  <Button size="small" color="primary">
              Learn More
        </Button> </Link>
          </CardActions>
        </Card>



      </div>
      <div className="boxes">
    <Card className={classes.card}>
          <CardActionArea>
            <Link to={'/messages'}></Link> <CardMedia
              className={classes.media}
              image={require('../images/text.jpg')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Messages
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Have Questions or Concerns about you Medication? Send an SMS directly to your doctor in real time.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Link to={'/messages'}> <Button size="small" color="primary">
              Learn More
        </Button> </Link>
          </CardActions>
        </Card>
      </div>


      <div className="boxes">
    <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('../images/phar.jpg')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pricing
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Want more from your Wellnes_Rx Account?! See out pricing options for Pro and Enterprise Accounts.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

           <Link to = {'/doctors'}> <Button size="small" color="primary">
              Learn More
        </Button></Link>
          </CardActions>
        </Card>
      </div>

     



    </div>
  );
}


















