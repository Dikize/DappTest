import * as React from 'react';
import { Grid } from '@material-ui/core';
import IconFooter from "./IconFooter";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
// import { FcComboChart } from "react-icons/fc";
import classes from './Footer.module.scss'
import logoFooter from '../../assets/onepiece/12.jpg'

const FacebookBackground = "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";


export default function Footer() {

    return (
        <Grid container className={`${classes.containerFooter} py-4`}>
            <Grid container alignItems="center" className={`${classes.containerIconFooter}`}>
                <Grid item className={`${classes.footerIcon}`}>
                    <IconFooter color={FacebookBackground} style={{height: '55px', width: '55px'}} className={classes.icon}>
                        <FaFacebookF />
                    </IconFooter>
                </Grid>
                <Grid item className={`${classes.footerIcon}`}>
                    <IconFooter color={InstagramBackground} className={classes.icon}>
                        <FaInstagram />
                    </IconFooter>
                </Grid>
                <Grid item className={`${classes.footerIcon}`}>
                    <IconFooter color={TwitterBackground} className={classes.icon}>
                        <FaTelegram />
                    </IconFooter>
                </Grid>
                <Grid item className={`${classes.footerIcon}`}>
                    <IconFooter color={TwitterBackground} className={classes.icon}>
                        <FaTwitter />
                    </IconFooter>
                </Grid>
            </Grid>

            <svg className={classes.AnimationSvg}>
                <filter id="wavy">
                    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                        <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="30" />
                </filter>
            </svg>
            <div className={`${classes.footerCopyrightLogo} col-4 d-flex flex-column justify-content-center w-100 text-center`}>
                <p className="logo-text">
                    <img src={logoFooter} alt="Onepiece" style={{width:'300px',borderRadius:'16px'}} />
                </p>

                <h4 className="">Copyright © by MetaPokemon</h4>
            </div>
        </Grid>
    );
}