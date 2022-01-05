import React, { useState, useEffect, Fragment } from "react";
let Web3 = require("web3");
import Image from 'next/image'
import Swal from 'sweetalert2'
import Header from "../components/header";
import abiObj from '../src/utils/abi'

function Index() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [maxMintable, setMaxMintable] = useState(0);
  const [supply, setSupply] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isReady, setIsReady] = useState(false);


  let abi = abiObj;
  let contractAddress = "0x46350eda48b3aafc4c403ff02c024e76ae22e803";

  useEffect(() => {
    connectWallet();
  }, []);

  function connectWallet(){
    if(!window.ethereum){
      alert("Please install MetaMask");
      setIsReady(false);
      return;
    }
    
    ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAddress(accounts[0]);
          let w3 = new Web3(ethereum);
          setWeb3(w3);
          let c = new w3.eth.Contract(abi, contractAddress);
          setContract(c);

          c.methods
            .totalSupply()
            .call()
            .then((supply) => {
              setIsReady(true);
              setSupply(supply);
            })
            .catch((err) => {
              setIsReady(false);
              setAddress(null);
              setSupply(0);
              setBalance(0);
              setMaxMintable(0);
              setContract(null);
              Swal.fire({
                title: 'Error!',
                html: 'Check if you are using the Fantom Network',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              console.log(err)
            });

          c.methods
            .maxMintable()
            .call()
            .then((maxMintable) => {
              setMaxMintable(maxMintable);
            })
            .catch((err) => console.log(err));

          c.methods
            .balanceOf(accounts[0])
            .call()
            .then((_balance) => {
              setBalance(_balance);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          setIsReady(false);
          Swal.fire({
            title: 'Error!',
            html: 'Check if you are using the Fantom Network',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          console.log(err)
        })      
  }

  function handleClaim() {
    let tx = claim();
    console.log(tx);
  }

  async function loadData() {
    let totalSupply = await contract.methods
      .totalSupply()
      .call();

    setSupply(totalSupply);

    contract.methods
      .maxMintable()
      .call()
      .then((maxMintable) => {
        setMaxMintable(maxMintable);
      })
      .catch((err) => console.log(err));

    contract.methods
      .balanceOf(address)
      .call()
      .then((_balance) => {
        setBalance(_balance);
      })
      .catch((err) => console.log(err));
  }

  function claim() {
    setIsClaiming(true);
    let _price = web3.utils.toWei("20");

    contract.methods
      .claim()
      .send({
        gasLimit: "285000",
        to: contractAddress,
        from: address,
        value: _price,
      })
      .once("error", (err) => {
        console.log(err);
        setIsClaiming(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setIsClaiming(false);
        loadData();

        const link = 'https://ftmscan.com/tx/' + receipt.transactionHash 

        Swal.fire({
          title: 'Success!',
          html: 'You can check the transaction at <a href="' + link + '" target="_blank" style="color: blue">Ftmscan</a>',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      });
  }

  return (
    <Fragment>
      <div className="geeks"></div>
      
      <Header wallet={connectWallet} isReady={isReady} address={address} />

      <div id="app">
        <div className="form-container">
          <div className='content-container'>
            <div style={{ flex: 1 }} className='image-frame'>
              <Image src='/assets/game1.gif' alt='chess game' width='150' height='150' />
              <Image src='/assets/game2.gif' alt='chess game' className='disable-on-400' width='150' height='150' />
              <Image src='/assets/game3.gif' alt='chess game' className='disable-on-600' width='150' height='150' />
              <Image src='/assets/game4.gif' alt='chess game' className='disable-on-600' width='150' height='150' />
            </div>

            <div style={{ flex: 2 }}>
              <h2 className="colorGradient">Fantom Chess</h2>
              <br />
              <br />

              Fantom Chess is a collection of <div className='colorGradient'>555</div> random generated Chess Games stored on the <div className='colorGradient'>Fantom</div> Blockchain.
              <br />
              <br />

              All games in the collection will have different attributes, in addition to <div className='colorGradient'>colors</div> and billions of possible <div className='colorGradient'>moves</div>,
              games will also have random <div className='colorGradient'>sounds</div>.

              <br />
              <br />

              <div className='colorGradient'>55</div> games in the collection will be based on <div className='colorGradient'>great games</div> from the history of <div className='colorGradient'>chess</div>.

              <br />
              <br />

              Price: <div className='colorGradient'>20 FTM</div> each

              <br />
              <br />

              <a href='https://discord.gg/cDh6gbn59A' className='mr-10' target='_blank'>
                <Image src='/assets/discord.svg' alt='discord' width='20' height='20' />
              </a>

              <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10'>
                <Image src='/assets/twitter.svg' alt='twitter' width='20' height='20' />
              </a>

              <a href='https://ftmscan.com/address/0x46350eda48b3aafc4c403ff02c024e76ae22e803' className='mr-10' target='_blank'>
                <Image src='/assets/fantom.svg' alt='ftmscan' width='20' height='20' />
              </a>

              <a href='https://paintswap.finance/marketplace/collections/0x46350eda48b3aafc4c403ff02c024e76ae22e803' className='mr-10' target='_blank'>
                <Image src='/assets/paint.png' alt='paintswap' width='20' height='20' />
              </a>

              <a href='https://nftkey.app/collections/fantomchess/' target='_blank'>
                <Image src='/assets/nftkey.png' alt='nftkey' width='20' height='20' />
              </a>

              
            </div>
          </div>

          <br/>
          
          {isReady && <div> Minted {supply}/{maxMintable}</div>} (sold out)
          
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
          <a className='button' style={{marginRight: 10}} href="https://paintswap.finance/marketplace/collections/0x46350eda48b3aafc4c403ff02c024e76ae22e803" target='_blank'> Paint Swap</a>
          <a className='button' href="https://nftkey.app/collections/fantomchess/" target='_blank'>NFTKEY</a>
          </div>
          

        </div>
      </div>
    </Fragment>
  );
}

export default Index;
