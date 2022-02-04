import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./CustomHeader.module.scss"
import logo from "../../../assets/logo/logo.jpg"


const CustomHeader = () => {

    return (
        <Grid container className={`${classes.containerHeader} h-auto py-4`}>
            <Grid item xs={12} className={`${classes.animationFireText}`}>
                <div className={`${classes.text}`}>
                    <h1>Meta One Piece</h1>
                </div>
                <svg>
                    <filter id="fire">
                        <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                            <animate attributeName="baseFrequency" dur="10s" values="0.1 0.1;0.12 0.2"
                                repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="10"></feDisplacementMap>
                    </filter>
                </svg>
            </Grid>

            <Grid container className={`${classes.containerHedearCard}`}>
                <Grid item className={`${classes.wrapperHedearCard}`}> 
                    <div className={`${classes.contentHedearCard}`}>
                        <div className={`${classes.containerImg}`}><img src={logo} alt="" /></div>

                        <div className={`${classes.cardText} `}>
                            <h1>$METAONEPIECE</h1>
                            <p>$METAONEPIECE is a self-staking token whose ownership has been relinquished and the burned LP given to the community from the beginning of its creation. No developer wallet. No contract control, no liquidity control, Everything is burned and secured.</p>

                            <div className={`${classes.containerHeaderIcon} `}>
                                <div className={`${classes.headerIcon}`}>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/One_Piece_Coin" className={`${classes.icon}`} >
                                        <svg aria-hidden="true" width="80" height="70" focusable="false"
                                            data-prefix="fab" data-icon="twitter"
                                            className={` svg-inline--fa fa-twitter fa-w-16`} role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <a target="_blank" rel="noreferrer" href="https://t.me/OnePieceMetaCoin" className={`${classes.headerIcon}`}>
                                    <div className={`${classes.icon}`}>
                                        <svg aria-hidden="true" width="80" height="70" focusable="false" data-prefix="fab" data-icon="telegram" className={`svg-inline--fa fa-telegram fa-w-16`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"> </path> </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CustomHeader;
