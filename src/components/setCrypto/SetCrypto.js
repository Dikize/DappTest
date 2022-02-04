import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Grid } from "@material-ui/core";

import styles from "./SetCrypto.module.scss"
// import erc20abi from "./ERC20abi.json";
import erc20abi from "./BEP20abi.json";
import TxList from "./TxList";
import logobsc from "../../assets/logo/bsc.svg"
import logocoin from "../../assets/logo/coin.svg"
import logobinance from "../../assets/logo/binance.png"
import logopcs from "../../assets/logo/pcs.png"
import logogecko from "../../assets/logo/gecko.svg"

export default function SetCrypto() {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    tokenName: "-",
    tokenSymbol: "-",
    totalSupply: "-"
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  useEffect(() => {
    function setContrac() {
      if (contractInfo.address !== "-") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const erc20 = new ethers.Contract(
          contractInfo.address,
          erc20abi,
          provider
        );
  
        erc20.on("Transfer", (from, to, amount, event) => {
          console.log({ from, to, amount, event });
  
          setTxs((currentTxs) => [
            ...currentTxs,
            {
              txHash: event.transactionHash,
              from,
              to,
              amount: String(amount)
            }
          ]);
        });
        setContractListened(erc20);
  
        return () => {
          contractListened.removeAllListeners();
        };
      }
    }
    setContrac()

  }, [contractInfo.address]);
  // }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

    const tokenName = await erc20.name();
    const tokenSymbol = await erc20.symbol();
    const totalSupply = await erc20.totalSupply();

    setContractInfo({
      address: data.get("addr"),
      tokenName,
      tokenSymbol,
      totalSupply
    });
  };

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance)
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
  };

  return (
    <Grid container direction="column" className={`${styles.containerSetCrypto} py-4`}>
      <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`${styles.containerLogoSetCrypto}`}>
        <Grid item xs={2} className={`${styles.logoSetCrypto}`}><a href="https://bscscan.com/address/0xf571453e4fa3933aa92a3cab1323969cc94b62a0" target="_blank"  rel="noreferrer" className=""><img src={logobsc} loading="lazy" alt="" className="" /></a></Grid>
        <Grid item xs={2} className={`${styles.logoSetCrypto}`}><a href="https://pancakeswap.finance/swap?outputCurrency=0xf571453e4fa3933aa92a3cab1323969cc94b62a0" target="_blank"  rel="noreferrer" className=""><img src={logocoin} loading="lazy" alt="" className="" /></a></Grid>
        <Grid item xs={2} className={`${styles.logoSetCrypto}`}><a href="https://www.coingecko.com/" target="_blank"  rel="noreferrer" className=""><img src={logogecko} loading="lazy" alt="" className="" /></a></Grid>
        <Grid item xs={2} className={`${styles.logoSetCrypto}`}><a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank"  rel="noreferrer" className=""><img src={logobinance} loading="lazy" alt="" className="" /></a></Grid>
        <Grid item xs={2} className={`${styles.logoSetCrypto}`}><a href="https://poocoin.app/tokens/0xf571453e4fa3933aa92a3cab1323969cc94b62a0" target="_blank"  rel="noreferrer" className=""><img src={logopcs} loading="lazy" alt="" className="" /></a></Grid>
      </Grid>

      <Grid container direction="column" className={`${styles.containerFormSetCrypto} shadow-lg w-50 mx-auto`}>
        <form className={`${styles.formReadCrypto}`} onSubmit={handleSubmit}>
          <div className="mx-auto">
            <main className="">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                Read from smart contract
              </h1>
              <div className="">
                <div className="my-3">
                  <input
                    type="text"
                    name="addr"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    placeholder="ERC20 contract address"
                  />
                </div>
              </div>
            </main>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Get token info
              </button>
            </footer>
            <div className="px-4">
              <div className="overflow-x-auto">
                <table className="table w-full text-white">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Total supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{contractInfo.tokenName}</th>
                      <td>{contractInfo.tokenSymbol}</td>
                      <td>{String(contractInfo.totalSupply)}</td>
                      <td>{contractInfo.deployedAt}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-4">
              <button
                onClick={getMyBalance}
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Get my balance
              </button>
            </div>
            <div className="px-4">
              <div className="overflow-x-auto">
                <table className="table w-full text-white">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{balanceInfo.address}</th>
                      <td>{balanceInfo.balance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
        <div className="w-100">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Write to contract
          </h1>

          <form onSubmit={handleTransfer}>
            <div className="my-3">
              <input
                type="text"
                name="recipient"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient address"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                name="amount"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount to transfer"
              />
            </div>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Transfer
              </button>
            </footer>
          </form>
        </div>
        <div className="w-100">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Recent transactions
          </h1>
          <p>
            <TxList txs={txs} />
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
