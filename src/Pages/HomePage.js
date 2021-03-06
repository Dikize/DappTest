import React from "react";
import { Grid } from "@material-ui/core";
import SetCrypto from "../components/setCrypto/SetCrypto";
import CustomHeader from "../components/main/CustomHeader";
import About from "../components/main/About";
import Tokenomics from "../components/main/Tokenomics";
import HowToBuy from "../components/main/HowToBuy";
import Roadmap from "../components/main/Roadmap";
import FrequentlyQuestions from "../components/main/FrequentlyQuestions";
import Footer from "../components/footer/Footer";

const Homepage = () => {

    return (
        <Grid container direction="row" className='container-main'>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className="pb-2">
                {/* <Grid item className="pb-2 border mx-auto" xs={12} sm={10} md={8} lg={6} >  */}

                <Grid item id="CustomHeader" className="mx-auto text-center" xs={12}> 
                    <CustomHeader />
                </Grid>

                <Grid item id="about" className="mx-auto text-center" xs={12}> 
                    <About />
                </Grid>

                <Grid item id="tokenomics" className="mx-auto text-center" xs={12}> 
                    <Tokenomics />
                </Grid>

                <Grid item id="SetCrypto" className="pb-2 border mx-auto text-center" xs={12} > 
                    <h1>Section SetCrypto</h1>
                    <SetCrypto />
                </Grid>

                <Grid item id="roadmap" className="mx-auto text-center" xs={12}> 
                    <Roadmap />
                </Grid>

                <Grid item id="howToBuy" className="mx-auto text-center" xs={12}> 
                    <HowToBuy />
                </Grid>

                <Grid item id="FrequentlyQuestions" className="mx-auto text-center" xs={12}> 
                    <FrequentlyQuestions />
                </Grid>
            </Grid>
            
            {/* footer */}
            <Grid item className="pb-2" xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
};

export default Homepage;