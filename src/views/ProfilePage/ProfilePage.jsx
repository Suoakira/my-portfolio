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

import Parallax from "components/Parallax/Parallax.jsx"
import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import rails from "../../assets/img/rails.png"
import htmlFive from "../../assets/img/html5.png"
import cssThree from "../../assets/img/css3.png"

import Carousel from "../Components/Sections/SectionCarousel"

// blog card blogdata
import BlogCard from "./BlogCard.js"
import blogData from "../../assets/blogData"




import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';



import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

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

    const { spacing } = this.state
    

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    
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
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Stephen Courtier</h3>
                      <h6>Full Stack Software Engineer</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-medium"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-youtube"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Full Stack Software Engineer, with a passion for building applications that provide brilliant user
                  experiences. I have found working on collaborative projects extremely rewarding, and love seeing ideas from different perspectives come together, to build creative unique applications.{" "}
                </p>
              </div>
              <div onMouseOut={() => this.setState({ onMouseOver: false })}>
   
                <div style={centerStack} onMouseOver={() => this.setState({ onMouseOver: true })} > 
                    <h6>Current Stack</h6>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}> 
                        <img style={imgStyle} src="https://img.icons8.com/color/48/000000/javascript.png" />
                        <img style={imgStyle} src="https://img.icons8.com/color/48/000000/nodejs.png" />
                        <img style={imgStyle} src="https://img.icons8.com/ios/50/000000/react-native-filled.png" />
                        <img style={imgStyle} src="https://img.icons8.com/office/80/000000/ruby-programming-language.png" />
                        <img style={imgStyle} src={rails} />
                        <img style={imgStyle} src={htmlFive} />
                        <img style={imgStyle} src={cssThree} />                 
                    </GridItem>
                  </GridContainer>
                  {this.state.onMouseOver &&
                    <div>
                      <p>HTML5/CSS3, JavaScript, Node.JS, React, Redux, Express, Ruby, Ruby on Rails</p>
                    </div>}
              </div>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="rose"
                    tabs={[
                      {
                        tabButton: "Portfolio",
                        tabIcon: Code,
                        tabContent: (
                          <GridContainer 
                            justify="center"
                            >
                  
                              <Carousel />
                  
                              
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Recent Blog's",
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
                            <GridItem xs={12} sm={12} md={4}>
                          
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                    
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
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
