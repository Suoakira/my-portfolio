import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 240,
  },
  media: {
    height: 120,
  },
};

const buttonStyle = {
    color: "white",
  backgroundColor: "#f08080",
    borderRadius: "4px",
    textAlign: "center",
    display: "table",
    padding: "2%"
}

function MediaCard(props) {
  const { classes, blog } = props;
  return (

      <Card className={classes.card} onClick={() => window.open(blog.link, "_blank") } >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={blog.imgUrl}
        />
              
        <CardContent>
            <div style={buttonStyle}>
            <h6>{blog.title}</h6>
            </div>
       

        </CardContent>
        
      </CardActionArea>

    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);