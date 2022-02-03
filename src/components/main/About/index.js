import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./About.module.scss"

import img1 from "../../../assets/onepiece/1.jpg"
import img2 from "../../../assets/onepiece/2.jpg"
import img3 from "../../../assets/onepiece/3.jpg"
import img4 from "../../../assets/onepiece/4.jpg"
import img5 from "../../../assets/onepiece/5.jpg"
import img6 from "../../../assets/onepiece/6.jpg"
import img7 from "../../../assets/onepiece/7.jpg"
import img8 from "../../../assets/onepiece/8.jpg"
import img9 from "../../../assets/onepiece/9.jpg"
import img12 from "../../../assets/onepiece/12.jpg"


const About = () => {

    return (
        <Grid container className={`${classes.containerAbout}`}>
            <Grid item className={`${classes.cardAbout} p-3 mx-auto`}>
                <i>
                    <h4 className={`text-center mt-2 text-white`}>META ONE PIECE</h4>
                </i>
                <h2 className={`text-center lh-1 h1`}>About</h2>
                <div className={`${classes.cardGlassmorphText} container h-100 d-flex flex-column`}>
                    <div data-click="faq" className={`my-3`}>
                        <p className={`text-center`} style={{fontSize:'x-large'}}>What is METAONEPIECE Token?</p>
                        <p className={`mt-3`}>$METAONEPIECE is a new Token. We will conquer the world of crypto. NFT Marketplace and Play to earn Metaverse Game. METAONEPIECE will be the first to reach the moon by eating the dips. </p>
                    </div>
                </div>
            </Grid>

            <Grid container item className={`${classes.containerCarrousel}`} xs={12}>
                <div class={`${classes.contentCarrousel}`}>
                    <figure><img src={img1} alt="Alan Walker - The Spectre" /></figure>
                    <figure><img src={img2} alt="Alan Walker - Alone" /> </figure>
                    <figure><img src={img3} alt="OM TELOLET OM - ALAN WALKER" /></figure>
                    <figure><img src={img4} alt="Alan Walker Live at Albert Hall" /></figure>
                    <figure><img src={img5} alt="Alan Walker - The Spectre" /></figure>
                    <figure><img src={img6} alt="Alan Walker has partnered with Battlefield to showcase his new track Alone" /></figure>
                    <figure><img src={img7} alt="The Drop Dancing GIF by Alan Walker Official" /></figure>
                    <figure><img src={img8} alt="alone GIF by Alan Walker Official" /></figure>
                    <figure><img src={img9} alt="alone GIF by Alan Walker Official" /></figure>
                    <figure><img src={img12} alt="sing me to sleep GIF by Alan Walker Official" /></figure>
                </div>
                <div class="closeImage"></div>
            </Grid>
        </Grid>
    )
};

export default About;
