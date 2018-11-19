import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = {
  card: {
    Width: 600,
   
  },
  media: {
    objectFit: 'cover',
  },
};

class ImgMediaCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { classes } = this.props
  return (
    <div key={this.props.spacex.id}>
    <Card className={classes.card} style={{marginTop: 20, marginLeft: 20}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={this.props.spacex.mission_name}
          className={classes.media}
          height="300"
          image={this.props.spacex.links.mission_patch_small}
          title={this.props.spacex.mission_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {this.props.spacex.mission_name}
          </Typography>
          <Typography component="p">
          Ano de lançamento: {this.props.spacex.launch_year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/details"  size="small" color="primary" type="button" >
          Details
        </Link>
      
      </CardActions>
    </Card>
  
  </div>
  );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);