import React from 'react';
import PropTypes from 'prop-types';
import SectionPills from "../Components/Sections/SectionPills"
import { withStyles } from '@material-ui/core/styles';


import IntegnityLogo from "../../assets/img/integnity_logo.jpeg"
import Profile from "../../assets/img/profile.jpg"
import longLink from "./longLink.js"

const styles = {
    card: {
        maxWidth: 240,
    },
    media: {
        height: 120,
    },
};


function WorkHistory(props) {

    const { classes, blog } = props;
    return (

        <div>

            <div className="work-history-container">

                <div className="company-logo">

                    <div className="image-container">
                        <img src={IntegnityLogo} />
                    </div>
    

                    <div class="company-name">
                        <h3>Integnity - Full Stack Web Developer</h3>
                        <p>05/2019 to Current - 11 months</p>
                    </div>

                </div>

                <div className="company-description">
                        
                    I enjoy building creative software for creative people at Integnity. I am a core developer for our Adobe software, responsible for maintaining our code base, front-end design, and RESTful API integration.

                    <ul>
                        <li>Involved in sprint planning, task management and AGILE methodologies.</li>
                        <li>Have taken a key role in product development.</li>
                        <li>Used initiative to introduce new technologies (storybook), that improve workflows and save time.</li>
                        <li>Able to translate designs accurately from sketch to functional prototypes.</li>
                        <li>Had an active role in all stages of a products lifecycle.</li>
                    </ul>

                </div>


                
            </div>

            <div className="work-history-container">

                <div className="company-logo">

                    <div className="image-container">
                        <img src={longLink.longLink} />
                    </div>


                    <div class="company-name">
                        <h3>Freelance - Web Developer</h3>
                        <p>01/2019 to 04/2019 - 4 months</p>
                    </div>

                </div>

                <div className="company-description">
                        Produceing portfolio websites and landing pages for small business, I am able to understand the needs of my client,  and deliver the quality they expect in time strained situations.

                    <ul>
                        <li>Carried out testing on my websites across all major browsers to ensure quality and consistency throughout</li>
                        <li>Able to construct landing pages useing a variety of frameworks and languages, Vue/Vuex/React/Redux.</li>
                    </ul>

                </div>



            </div>

        </div>

    );
}

export default withStyles(styles)(WorkHistory);