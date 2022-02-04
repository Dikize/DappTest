import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./Roadmap.module.scss"
import imgDone from "../../../assets/done.svg"

const Roadmap = () => {

    return (
        <Grid container className={`${classes.containerRoadmap}  py-4`}>
            <Grid item xs={12}>
                <h1>
                    <span>M</span>
                    <span>E</span>
                    <span>T</span>
                    <span className="me-2">A</span>
                    <span></span>
                    <span>O</span>
                    <span>N</span>
                    <span className="me-2">E</span>
                    <span></span>
                    <span>P</span>
                    <span>I</span>
                    <span>E</span>
                    <span>C</span>
                    <span>E</span>
                </h1>
                <h2 className="text-center">Roadmap</h2>
            </Grid>

            <Grid item className={`${classes.cardRoadmap}`} xs={12}>
                <div className={`${classes.cardContainer} my-4`}>
                    <div className={`${classes.Card}`}>
                        <h3>Phase 1</h3><br />
                        <div className={`${classes.phaseCheck}`}>
                            <p>Build a strong community on Telegram</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Website launch</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Twitter Launch</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Launch on DexTools</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Influencers, AMAs, banners, sponsorship</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.layers}`}>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.cardContainer} my-4`}>
                    <div className={`${classes.Card}`}>
                        <h3>Phase 2</h3><br />
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Smart Contract deployment</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>NFT SOON</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Stealth Launch on PancakeSwap</p>
                            <div className={`${classes.checkboxWrapper} ${classes.checked}`}>
                                <img src={imgDone} loading="lazy" width="12" height="20" alt="" className={`${classes.checkboxIcon}`} />
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Listing on CMC & CG</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Listing on multiple plateform</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.layers}`}>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.cardContainer} my-4`}>
                    <div className={`${classes.Card}`}>
                        <h3>Phase 3</h3><br />
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Launch of the first game</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>100K+ holders</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>Partnerships</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}>
                            </div>
                        </div>
                        <div className={`${classes.phaseCheck} my-3`}>
                            <p>New challenges will arise</p>
                            <div className={`${classes.checkboxWrapper} ${classes.outline}`}></div>
                        </div>
                        <div className={`${classes.layers}`}>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                            <div className={`${classes.layer}`}></div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default Roadmap;
