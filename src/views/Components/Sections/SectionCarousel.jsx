import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/kis.png"
import image2 from "assets/img/woe.png"
import image3 from "assets/img/js.png"
import { GithubLoginButton } from "react-social-login-buttons"


import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation'

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    }

    const buttonStyle = { 
      color: "white", 
      backgroundColor: "#e91d62", 
      borderRadius: "4px", 
      textAlign: "center", 
      display: "table", 
      padding: "2px" 
    }

    const dimImg = { 
      filter: "brightness(70%) blur(1px)",

    }
    


    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} xs={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      style={dimImg}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h6>
                      <b>Keep It Simple - (savings app)</b>
                      </h6>
                      <Button>                      
                        <div style={buttonStyle}>
                          <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                    </Button>
                      <Button>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Front-End
                        </div>
                      </Button>
                      <Button>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Back-End
                        </div>
                      </Button>
                      <h6><b>JS/React, Ruby/Ruby on Rails, Semantic UI</b></h6>
                    </div>
                  </div>
                
                  <div>
                    <img
                      style={dimImg}
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h6>
                        <b>Where on Earth - (trivia game)</b>
                      </h6>
                      <Button>
                        <div style={buttonStyle}>
                          <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                      </Button>
                      <Button>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Front-End
                        </div>
                      </Button>
                      <Button>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Back-End
                        </div>
                      </Button>
                      <h6><b>JS/React, Ruby/Ruby on Rails, Semantic UI</b></h6>
                    </div>
                  </div>
      
                  <div>
                    <img
                      src={image3}
                      style={dimImg}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <div className="slick-caption">
                        <h6>
                          <b>JavaStyles - (design and outfit)</b>
                        </h6>
                        <Button>
                          <div style={buttonStyle}>
                            <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                        </Button>
                        <Button>
                          <div style={buttonStyle}>
                            <i className={"fab fa-github"} /> Front-End
                        </div>
                        </Button>
                        <Button>
                          <div style={buttonStyle}>
                            <i className={"fab fa-github"} /> Back-End
                        </div>
                        </Button>
                        <h6><b>Vanilla JavaScript, Ruby/Ruby on Rails, Semantic UI</b></h6>
                      </div>
                      </div>
                    </div>
          
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
