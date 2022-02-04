import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./HowToBuy.module.scss"


const HowToBuy = () => {

    return (
        <Grid container className={`${classes.containerHowToBuy} py-4`}>
            <h2 className="text-center text-white">How to buy</h2>

            <Grid container className={`${classes.containerHowToBuyCard}`}>
                <Grid item className={`${classes.containerCardWavyEffect}`}> 
                    <div className={`${classes.cardWavyEffect}`}>
                        <div className={`${classes.box}`}>
                            <div className={`${classes.content}`}>
                                <h2><a href="https://metamask.io/" className="main-title" target="_blank" rel="noreferrer">Download &amp; setup MetaMask or TrustWallet</a></h2>
                                <p>
                                    Download <a href="https://metamask.io/" target="_blank" rel="noreferrer">MetaMask</a> (a crypto wallet in form of abrowser extension) or
                                    <a href="https://trustwallet.com/" target="_blank" rel="noreferrer">TrustWallet</a> (an app for your phone). After thatyou will have to add the Binance Smart Chain to your network-list.
                                    (<a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank" rel="noreferrer">Click here for a step-by-step tutorial</a>)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <svg>
                        <filter id="wavy">
                            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
                                    repeatCount="indefinite" />
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="30" />
                        </filter>
                    </svg>
                </Grid>

                <Grid item className={`${classes.containerCardWavyEffect}`}> 
                    <div className={`${classes.cardWavyEffect}`}>
                        <div className={`${classes.box}`}>
                            <div className={`${classes.content}`}>
                                <h2><a href="https://docs.binance.org/smart-chain/wallet/metamask.html" className="main-title" target="_blank" rel="noreferrer">Buy and send BNB to MetaMask</a></h2>
                                <p> Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. <strong>BEP-20 addresses start with a</strong></p>
                                <p><strong>"0xDB7C16146065Aff2aAbD1530DB202D5a8eCE2DE9"</strong></p>
                            </div>
                        </div>
                    </div>
                    
                    <svg>
                        <filter id="wavy">
                            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
                                    repeatCount="indefinite" />
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="30" />
                        </filter>
                    </svg>
                </Grid>

                <Grid item className={`${classes.containerCardWavyEffect}`}> 
                    <div className={`${classes.cardWavyEffect}`}>
                        <div className={`${classes.box}`}>
                            <div className={`${classes.content}`}>
                                <h2><a href="https://pancakeswap.finance/swap?outputCurrency=0xDB7C16146065Aff2aAbD1530DB202D5a8eCE2DE9" target="_blank" rel="noreferrer" className="main-title">Head on to PancakeSwap and swap for $METAONEPIECE</a></h2>
                                <p><a href="https://pancakeswap.finance/swap?outputCurrency=0xDB7C16146065Aff2aAbD1530DB202D5a8eCE2DE9" target="_blank" rel="noreferrer">Click here</a> to head on over to PancakeSwap or use this address <strong style={{overflowWrap:'anywhere'}}>0xDB7C16146065Aff2aAbD1530DB202D5a8eCE2DE9 </strong> to select METAONEPIECE. Set the slippage tolerance to 10% (sometimes it may be a bit more, depending on how much demand there is)</p>
                            </div>
                        </div>
                    </div>
                    
                    <svg>
                        <filter id="wavy">
                            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
                                    repeatCount="indefinite" />
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="30" />
                        </filter>
                    </svg>
                </Grid>

                <Grid item className={`${classes.containerCardWavyEffect}`}> 
                    <div className={`${classes.cardWavyEffect}`}>
                        <div className={`${classes.box}`}>
                            <div className={`${classes.content}`}>
                                <h2><a href="#t" className="main-title" target="_blank" rel="noreferrer">View $METAONEPIECE and HODL</a></h2>
                                <p> Swap BNB for METAONEPIECE. Now you need to add METAONEPIECE to your MetaMask (<a target="_blank" rel="noreferrer" href="https://docs.yearn.finance/how-to-guides/how-to-add-a-custom-token-to-metamask">Tutorial here</a>) or Trust Wallet to view your $METAONEPIECE. Lastly HODL! </p>
                            </div>
                        </div>
                    </div>
                    
                    <svg>
                        <filter id="wavy">
                            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02"
                                    repeatCount="indefinite" />
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="30" />
                        </filter>
                    </svg>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default HowToBuy;
