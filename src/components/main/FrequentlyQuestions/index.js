import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./FrequentlyQuestions.module.scss"


const FrequentlyQuestions = () => {

    return (
        <Grid container className={`${classes.FrequentlyQuestions} py-4`}>
            <Grid item xs={12}>
                <h1 className="text-center"> Section 1</h1>
            </Grid>

            <Grid container className={`${classes.cardFaq}`}>
                <i>
                    <h4 className="text-center mt-2 text-white">META ONE PIECE</h4>
                </i>
                <h2 className="text-center lh-1 h1 w-100">Frequently Asked&nbsp;Questions</h2>
                <div className={`${classes.cardFaqText} container h-100 d-flex flex-column`}>
                    <div data-click="faq" className="my-3">
                        <div className="d-flex align-items-center">
                            <h2 className="h5 lh-1"><span className="me-1"><p className="p-0">1</p></span> What is METAONEPIECE Token?</h2>
                        </div>
                        <p className=""><span className="mx-1"></span> $METAONEPIECE is a new Token. We will conquer the world of crypto. NFT
                            Marketplace and Play to earn Metaverse Game. METAONEPIECE will be the first to reach the
                            moon by eating the dips.</p>
                    </div>

                    <div data-click="faq" className="my-3">
                        <div className="d-flex align-items-center">
                            <h2 className="h5 lh-1"><span className="me-1"><p className="p-0">2</p></span> Where can I buy METAONEPIECE ?</h2>
                        </div>
                        <p className=""> At this early stage, $METAONEPIECE is available on Stealth Launch Trading
                            on Pancakeswap. Our Token will be available for Trading on bigger exchanges later on...
                            We'll get there together.</p>
                    </div>

                    <div data-click="faq" className="my-3">
                        <div className="d-flex align-items-center">
                            <h2 className="h5 lh-1"><span className="me-1"><p className="p-0">3</p></span>How can I contact the team?</h2>
                        </div>
                        <p className=""> The best way to contact the team is through our <a href="https://t.me/METAONEPIECE" target="_blank" rel="noreferrer">telegram </a>. We are always available to help you!<br /> </p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default FrequentlyQuestions;
