import React from "react";
import { Grid } from "@material-ui/core";
import SetCrypto from "../components/setCrypto/SetCrypto";
import CustomHeader from "../components/main/CustomHeader";
import About from "../components/main/About";
import Tokenomics from "../components/main/Tokenomics";
// import howToBuy from "../components/main/HowToBuy";
// import Roadmap from "../components/main/Roadmap";
// import FrequentlyQuestions from "../components/main/FrequentlyQuestions";

const Homepage = () => {

    return (
        <Grid container direction="row" className='container-main'>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className="pb-2">
                {/* <Grid item className="pb-2 border mx-auto" xs={12} sm={10} md={8} lg={6} >  */}

                <Grid item id="CustomHeader" className="pb-2 border mx-auto text-center" xs={12} style={{width:'48px',height:'500px'}}> 
                    <CustomHeader />
                </Grid>

                <Grid item id="about" className="pb-2 border mx-auto text-center" xs={12}> 
                    <About />
                </Grid>

                <Grid item id="tokenomics" className="pb-2 border mx-auto text-center" xs={12}> 
                    <Tokenomics />
                </Grid>

                <Grid item id="SetCrypto" className="pb-2 border mx-auto text-center" xs={12} > 
                    <h1>Section SetCrypto</h1>
                    <SetCrypto />
                </Grid>

                <Grid item id="roadmap" className="pb-2 border mx-auto text-center" xs={12} style={{width:'48px',height:'500px'}}> 
                    <h1>Section roadmap</h1>
                    {/* <roadmap /> */}
                </Grid>

                <Grid item id="howToBuy" className="pb-2 border mx-auto text-center" xs={12} style={{width:'48px',height:'500px'}}> 
                    <h1>Section howToBuy</h1>
                    {/* <howToBuy /> */}
                </Grid>

                <Grid item id="FrequentlyQuestions" className="pb-2 border mx-auto text-center" xs={12} style={{width:'48px',height:'500px'}}> 
                    <h1>Section FrequentlyQuestions</h1>
                    {/* <FrequentlyQuestions /> */}
                </Grid>
            </Grid>
            
            {/* footer */}
            <Grid item className="pb-2" xs={12}>
                {/* <Footer /> */}
                <h1>Footer</h1>
            </Grid>
        </Grid>
    )
};

export default Homepage;