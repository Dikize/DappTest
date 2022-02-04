import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./Tokenomics.module.scss"

import TOKEN from '../../../assets/logo/TOKEN.png'
import Marketing from '../../../assets/logo/Marketing.svg'
import Liquidity from '../../../assets/logo/Liquidity.png'
import GiveAways from '../../../assets/logo/GiveAways.png'

const Tokenomics = () => {

    return (
        <Grid container className={`${classes.ContainerTokenomics}`}>
            <Grid item xs={12}>
                <h1 className="text-center mt-5"> Section 1</h1>
            </Grid>

            <Grid container className={`${classes.ContainerTokenomicsCard}`} justifyContent="space-evenly">
                <div className={`${classes.cardAnimCard}`}>
                    <div className={`${classes.icon}`}>
                        <img src={TOKEN} alt="" />
                    </div>
                    <div className={`${classes.content}`}>
                        <h2>100,000,000</h2>
                        <h3>TOKEN SUPPLY</h3>
                    </div>
                </div>

                <div className={`${classes.cardAnimCard}`}>
                    <div className={`${classes.icon}`}>
                        <img src={Marketing} alt="" />
                    </div>
                    <div className={`${classes.content}`}>
                        <h2>3% Marketing Wallet</h2>
                        <p>In Every transaction 3% will go towards the Marketing Wallet. We will do everything in
                            power to make the coin reach towards the whole world.</p>
                    </div>
                </div>

                <div className={`${classes.cardAnimCard}`}>
                    <div className={`${classes.icon}`}>
                        <img src={Liquidity} alt="" />
                    </div>
                    <div className={`${classes.content}`}>
                        <h2>3% Liquidity Pool</h2>
                        <p>3% Every Transaction added to the Liquidity Pool</p>
                    </div>
                </div>

                <div className={`${classes.cardAnimCard}`}>
                    <div className={`${classes.icon}`}>
                        <img src={GiveAways} alt="" />
                    </div>
                    <div className={`${classes.content}`}>
                        <h2>8% Buy Back & GiveAways</h2>
                        <h3>GiveAways</h3>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default Tokenomics;
