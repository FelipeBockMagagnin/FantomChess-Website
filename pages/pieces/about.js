import React, { useState, useEffect, Fragment } from "react";
let Web3 = require("web3");
import Image from 'next/image'
import Swal from 'sweetalert2'
import Header from "../../components/header";

function Index() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [maxMintable, setMaxMintable] = useState(0);
  const [supply, setSupply] = useState(0);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isReady, setIsReady] = useState(false);


  return (
    <Fragment>
      <div className="geeks"></div>
      
      <Header isReady={isReady} staticPage={true} />

      <div id="app">
        <div className="form-container">
          <div className='content-container'>
            <div style={{ flex: 1 }} className='image-frame'>
              <Image src='/assets/pieces.png' alt='chess game' width='440' height='440' />
            </div>

            <div style={{ flex: 2 }}>
              <h2 className="colorGradient">Fantom Chess Pieces</h2>
              <br />
              <br />

              A <div className='colorGradient'>FREE</div> NFT collection just for holders, every holder got one per Fantom Chess in wallet (1:1) 
              
            
              <br />
              <br />

              {/* <a href='https://discord.gg/cDh6gbn59A' className='mr-10' target='_blank'>
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
              </a> */}
            </div>
          </div>

          <br/>
          
          {/* {isReady && <div> Minted {supply}/{maxMintable}</div>} (sold out)
          
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
            <a className='button' style={{marginRight: 10}} href="https://paintswap.finance/marketplace/collections/0x46350eda48b3aafc4c403ff02c024e76ae22e803" target='_blank'> Paint Swap</a>
            <a className='button' href="https://nftkey.app/collections/fantomchess/" target='_blank'>NFTKEY</a>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
