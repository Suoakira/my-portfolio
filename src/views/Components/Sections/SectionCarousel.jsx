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
import image1 from "assets/img/ps.png"
import image2 from "assets/img/plugin.png"
import image3 from "assets/img/kis.png"
import { GithubLoginButton } from "react-social-login-buttons"


import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation'

const kisDemo = "https://www.youtube.com/watch?v=ZGGx5CuUhpk"
const kisFe = "https://github.com/Suoakira/keep-it-simple"
const kisBe = "https://github.com/Suoakira/keep-it-simple-server"

const woeDemo = "https://www.youtube.com/watch?v=7ESBy5lD7vE"
const woeGh = "https://github.com/joarnie/mod-4-trivia-game"

const jsDemo = "https://www.youtube.com/watch?v=f2BmaNaXvgY"
const jsFe = "https://github.com/Suoakira/javastyles-front-end"
const jsBe = "https://github.com/Suoakira/javastyles_api"

const githubAdobeFS = "https://github.com/Suoakira/file-browser"
const youtubeAdobeFS = "https://www.youtube.com/watch?v=Pz4lXeto7rI&feature=youtu.be"

const youtubeAdobeAE = "https://www.youtube.com/watch?v=fCi359LrNe0&feature=youtu.be"

class SectionCarousel extends React.Component {

  openLink = (url) => {
    return window.open(url, '_blank')
  }

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
      filter: "brightness(60%) blur(1px)",

    }
    
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} xs={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings} >

                  <div>
                    <img
                      src={image1}
                      style={dimImg}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h6>
                        <b>ADOBE Photoshop - Asset Manager</b>
                      </h6>
                      <Button onClick={() => this.openLink(youtubeAdobeFS)}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                      </Button>
                      <Button onClick={() => this.openLink(githubAdobeFS)}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Github
                        </div>
                      </Button>
                      <h6><b>Vue/Vuex, node.js</b></h6>
                    </div>
                  </div>
                  
                  <div>
                    <img
                      src={image2}
                      style={dimImg}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h6>
                        <b>ADOBE Aftereffects - Plugin</b>
                      </h6>
                      <Button onClick={() => this.openLink(youtubeAdobeAE)}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                      </Button>
                      <Button onClick={() => this.openLink("https://gitlab.com/Suoakira")}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Gitlab
                        </div>
                      </Button>
                      <h6><b>Vue/Vuex, node.js</b></h6>
                    </div>
                  </div>


                  <div>
                    <img
                      src={image3}
                      style={dimImg}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h6>
                      <b>Keep It Simple - (savings app)</b>
                      </h6>
                      <Button onClick={() => this.openLink(kisDemo)}>                      
                        <div style={buttonStyle}>
                          <i className={"fab fa-youtube"} /> Video Demo
                        </div>
                    </Button>
                      <Button onClick={() => this.openLink(kisFe)}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Front-End
                        </div>
                      </Button>
                      <Button onClick={() => this.openLink(kisBe)}>
                        <div style={buttonStyle}>
                          <i className={"fab fa-github"} /> Back-End
                        </div>
                      </Button>
                      <h6><b>JS/React, Ruby/Ruby on Rails, Semantic UI</b></h6>
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
