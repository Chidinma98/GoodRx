import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import '../images/pills.png';


const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 340,
    width:400
   
  },
});



class Info extends Component{

    render(){
         const { classes } = this.props
        
        return(
          <div className = "container">
      <div className = "boxes">
        
        A
        <Card className={this.props.card}>
      <CardActionArea>
        <CardMedia
          className={this.props.media}
          // style={styles.media}
          image = {require('../images/pill2.jpg')}
        
          title="Contemplative Reptile"
        /> 

        <CardContent>
        <Link to = {'/prescriptions'}> <Typography gutterBottom variant="h5" component="h2">
            Prescriptions
          </Typography> </Link>
          <Typography variant="body2" color="textSecondary" component="p">
           View All your Prescriptions. Add new medications, or simply delete old ones.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
         <Button size="small" color="primary">
          Learn More
        </Button> 
      </CardActions>
    </Card>
      
      
      
      </div>
      <div>B
      {<img src = {'../images/pill2.jpg'}/>}
      <Card className={this.props.card}>
      <CardActionArea>
       <Link to = {'/messages'}></Link> <CardMedia
          className={this.props.media}
          image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      
      </div>
      <div>C
      <Card className={this.props.card}>
      <CardActionArea>
        <CardMedia
          className={this.props.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Link to = {'/carousel'}> <Typography gutterBottom variant="h5" component="h2">
            Pharmacies
          </Typography> </Link>
          <Typography variant="body2" color="textSecondary" component="p">
           See your saved Pharmacies and contact them in real time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

      </div>
    </div>


  //         <div className = "container">
  //           {/* <h1>HI</h1> */}
  //         <div className = "boxes">A
    // <Card className={this.props.card}>
    //   <CardActionArea>
    //    <Link to = {'/prescriptions'}> <CardMedia
    //       className={this.props.media}
    //       image="../images/pills.png"
    //       title="Contemplative Reptile"
    //     /> </Link>
    //     <CardContent>
    //     <Link to = {'/prescriptions'}> <Typography gutterBottom variant="h5" component="h2">
    //         Prescriptions
    //       </Typography> </Link>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //        View All your Prescriptions. Add new medications, or simply delete old ones.
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
       
    //      <Button size="small" color="primary">
    //       Learn More
    //     </Button> 
    //   </CardActions>
    // </Card>
  //   </div>
  //   <div className = "boxes">B
    // <Card className={this.props.card}>
    //   <CardActionArea>
    //    <Link to = {'/messages'}></Link> <CardMedia
    //       className={this.props.media}
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Messages
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //         across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  //   </div>
  //   <div className = "boxes">C
    // <Card className={this.props.card}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={this.props.media}
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //     <Link to = {'/carousel'}> <Typography gutterBottom variant="h5" component="h2">
    //         Pharmacies
    //       </Typography> </Link>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //         across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
        
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  //   </div>
  // </div>
        
        
        
        )
    }
}

export default Info