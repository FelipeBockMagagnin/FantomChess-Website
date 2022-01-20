import React, { useState, useEffect, Fragment } from "react";
let Web3 = require("web3");
import Image from 'next/image'
import Swal from 'sweetalert2'
import axios from "axios";
import analyse from "./analyse/[id]";
import rarity from '../src/utils/chessRarity.json';
import abiObj from '../src/utils/abi'

function Index() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [balance, setBalance] = useState(0)
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  let abi = abiObj;

  let contractAddress = "0x46350eda48b3aafc4c403ff02c024e76ae22e803";
  let jsonAddress = 'https://dweb.link/ipfs/QmRa2wmxdABxy1tXXdWtEJkpXoucUDfxGYFFof1W9PcWKc/';

  useEffect(() => {
    connectWallet();
  }, []);

  function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      setIsReady(false);
      return;
    }

    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
        setAddress(accounts[0]);
        let w3 = new Web3(ethereum);
        setWeb3(w3);
        let c = new w3.eth.Contract(abi, contractAddress);
        setContract(c);
        setIsReady(true);
        c.methods
          .balanceOf(accounts[0])
          .call()
          .then((_balance) => {
            setBalance(_balance);
          })
          .catch((err) => console.log(err));

        setLoading(true);
        axios.get('https://api.paintswap.finance/v2/userNFTs?user=' + accounts[0],
          {
            params: {
              allowNSFW: true,
              numToFetch: 150,
              numToSkip: 0,
            },
          })
          .then(data => {
            let responses = [];

            //filter nfts from collection
            let games = data.data.nfts.filter(x => x.address == "0x46350eda48b3aafc4c403ff02c024e76ae22e803");
            console.log(games);

            games.forEach(game => {
              responses.push(
                axios.get(jsonAddress + game.nft.tokenId + '.json').then(res => res.data)
              )
            }
            );

            Promise.all(responses).then(results => {
              console.log(results)

              games.map(game => {
                let itemById = results.filter(x => x.id == game.nft.tokenId)[0];
                game['json'] = itemById;
                return game;
              })

              setGames(games);
            })
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
          }).finally(_ =>{
            setLoading(false);
          })
      });
  };

  return (
    <Fragment>
      <div className="geeks"></div>
      <div className="header">
        <a className="tittle colorGradient" href='/'>Fantom Chess</a>

        <div className='menus'>
          <div>You own ({balance}) games</div>
        </div>

        <button className='button' onClick={connectWallet}>
          {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
        </button>
      </div>

      <div id="app" style={{height: '100vh'}}>
        <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
            
            {loading && <div>Loading...</div>}
            {!loading && games.length == 0 && <div>You don't have a Fantom Chess</div>}

            {games.map(game => {
              return (
                <div style={{ padding: 20, width: 300 }}>
                  Fantom Chess #{game.nft.tokenId}
                  <br></br>
                  <video width='200' muted  height='200' autoPlay={true} loop poster={game.json.image.replace('ipfs://', 'https://dweb.link/ipfs/')} controls>
                    <source src={game.json.image.replace('ipfs://', 'https://dweb.link/ipfs/')} type="video/mp4"></source>
                  </video>

                  <a className='button' href={'analyse/' + game.nft.tokenId} style={{width: '50%', marginTop: 10, height: 30, marginLeft: 'auto', marginRight: 'auto'}}>Analyse</a>


                  <div style={{display: 'flex', marginTop: 10}}>
                    <span className='button' style={{width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none'}} >
                      Score: {rarity.filter(x => x.id == game.nft.tokenId)[0].score}
                    </span>

                    <span className='button' style={{width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none'}} >
                      Rank: #{rarity.indexOf(rarity.filter(x => x.score == rarity.filter(x => x.id == game.nft.tokenId)[0].score)[0])+1}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
