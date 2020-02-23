import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ContactMail from "@material-ui/icons/ContactMail";
import Code from "@material-ui/icons/Code";
import textsms from "@material-ui/icons/Textsms";
import Popover from "@material-ui/core/Popover"
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx"
import Formsy from 'formsy-react'
import Parallax from "components/Parallax/Parallax.jsx"

import rails from "../../assets/img/rails.png"
import htmlFive from "../../assets/img/html5.png"
import cssThree from "../../assets/img/css3.png"

import Carousel from "../Components/Sections/SectionCarousel"
//net
// blog card blogdata
import BlogCard from "./BlogCard.js"
import blogData from "../../assets/blogData"
import LongLink from "./longLink"

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Grid from '@material-ui/core/Grid';

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// social media links
const linkedIn = "www.linkedin.com/in/stephen-james-courtier"
const gitHub = "https://github.com/suoakira"
const medium = "https://medium.com/@steves0089"

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      spacing: 16
    }
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  }

  openLink = (url) => {
    return window.open(url, '_blank')
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const imgStyle = { 
      width: "48px",
      height: "auto",
      paddingLeft: "2px",
      paddingRight: "2px",
      paddingBottom: "10px"
    }
    const centerStack = {
      textAlign: "center",
    }
    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
  
        objectFit: 'cover',
      },
    }

    const blog = {
      position: "relative",
      width: "50%",
      height: "Auto", 
      borderRadius: "10px"
    }

    const blogText = {
      color: "white",
      position: "absolute",
      top: "0px",
      left: "0",
      width: "100%",
    }

    const iconBlue = {
      color: "#3A6588"
    }

    const emailStyle = {
      color: "white",
      backgroundColor: "#e91d62",
      borderRadius: "4px",
      textAlign: "center",
      padding: "1%"
    }

    const { spacing } = this.state
    

    const navImageClasses = classNames(classes.imgFluid, classes.imgGallery)
    
    return (
      <div>
        <Header
          color="transparent"
          brand={"\xa0"}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/tech1.jpeg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={LongLink.longLink} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Stephen Courtier</h3>
                      <h6>Full Stack Software Engineer</h6>
                      <Button onClick={() => this.openLink(gitHub)} justIcon link className={classes.margin5}>
                        <i style={iconBlue} className={"fab fa-github"} />
                      </Button>
                      <Button onClick={() => this.openLink(medium)} justIcon link className={classes.margin5}>
                        <i style={iconBlue} className={"fab fa-medium"} />
                      </Button>
                      <Button onClick={() => this.openLink(linkedIn)} justIcon link className={classes.margin5}>
                        <i style={iconBlue} className={"fab fa-linkedin"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Full Stack Software Developer, with a track record of building beautifully designed applications from concept to release. Handling everything from security and design, to building native installers, and adding the final touch's that make it unique.

                   .{" "}
                </p>

                <p>I have a front-end focus (Vue/React/CSS) but am just as eager to get stuck in with some back-end RESTful API design.</p>
              </div>
              <div onMouseOut={() => this.setState({ onMouseOver: false })}>
   
                <div style={centerStack} onMouseOver={() => this.setState({ onMouseOver: true })} > 
                    <h6>Current Stack</h6>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}> 
                        <img style={imgStyle} src="https://img.icons8.com/color/48/000000/javascript.png" />
                        <img style={imgStyle} src="https://img.icons8.com/color/48/000000/nodejs.png" />
                        <img style={imgStyle} src="https://img.icons8.com/ios/50/000000/react-native-filled.png" />
                        <img style={imgStyle} src="https://vuejs.org/images/logo.png" />
                        <img style={imgStyle} src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" />
                        <img style={imgStyle} src="https://img.icons8.com/office/80/000000/ruby-programming-language.png" />
                        <img style={imgStyle} src={rails} />
                        <img style={imgStyle} src={htmlFive} />
                        <img style={imgStyle} src={cssThree} />                 
                    </GridItem>
                  </GridContainer>
                  {this.state.onMouseOver &&
                    <div>
                      <p>HTML5/CSS3, JavaScript, Node.JS, React, Redux,Vue.js, Vuex Express, Ruby, Ruby on Rails</p>
                    </div>}

              </div>
                <div style={{ cursor: "pointer"}} onClick={() => this.openLink("https://flatironschool.com")}className={classes.description}>
                      <h6><b style={{ color: "blue" }}>//</b> Flatiron School Full Stack Developer Graduate</h6>
                  </div>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="rose"
                    tabs={[
                      {
                        tabButton: "Portfolio",
                        tabIcon: Code,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12} l={12} xl={12}>
                              <Carousel classes={classes} />
                            </GridItem>
                          </GridContainer>
                  
                        )
                      },
                      {
                        tabButton: "Recent Blogs",
                        tabIcon: textsms,
                        tabContent: (

                          <div style={{padding: "5px;"}}>
                          <GridContainer justify="center">
                            <Grid item xs={12}>
                              <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                                  {blogData.map( (blog, key) => (
                                  <Grid key={key} item>
                                    <BlogCard blog={blog}/>
                                  </Grid>
                                ))}
                              </Grid>
                            </Grid>        
                          </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Contact Me",
                        tabIcon: ContactMail,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12}>
                 
                              <i style={emailStyle} class="material-icons">
                                Email
                              </i><h6 style={{paddingLeft: "2%"}}>Steves0089@gmail.com</h6>
                              <br></br>
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
