import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./FrequentlyQuestions.module.scss"


const FrequentlyQuestions = () => {

    return (
        <Grid container className={`${classes}`}>
            <Grid item xs={12}>
                <h1 className="text-center mt-5"> Section 1</h1>
            </Grid>

            <Grid container item className="pb-2" xs={12}>
                <Grid item className="pb-2 border mx-auto" xs={6}> </Grid>
            </Grid>
        </Grid>
    )
};

export default FrequentlyQuestions;
