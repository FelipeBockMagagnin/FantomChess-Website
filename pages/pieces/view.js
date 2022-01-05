import React, { useState, useEffect, Fragment } from "react";
let Web3 = require("web3");
import axios from "axios";
import abiObj from '../../src/utils/abiPieces.json'

function Index() {
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [pieces, setPieces] = useState([]);
    const [loading, setLoading] = useState(false);

    let abi = abiObj;
    let contractAddress = "0x60a19c72f967f6b3a2540cfbd1f5da5f14ec5913";
    let jsonAddress = 'https://dweb.link/ipfs/QmVm71Q8U68M4iSoFvCLRLsQL3CRjEJgNUeePEddG5TWip/';

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
                setIsReady(true);
                setLoading(true);

                c.methods
                    .piecesOwned(accounts[0])
                    .call()
                    .then((pieces) => {
                        console.log('pieces owned', pieces);

                        let responses = [];

                        pieces.forEach(piece => {
                            responses.push(
                                axios.get(jsonAddress + piece).then(res => res.data)
                            )
                        });

                        Promise.all(responses).then(results => {
                            console.log(results)
                            setPieces(results);
                        }).finally(_ => {
                            setLoading(false);
                        })
                    })
                    .catch((err) => console.log(err))
            });
    };

    return (
        <Fragment>
            <div className="geeks"></div>
            <div className="header">
                <a className="tittle colorGradient" href='/'>Fantom Chess</a>

                <div className='menus'>
                    <div>You own ({pieces.length}) pieces</div>
                </div>

                <button className='button' onClick={connectWallet}>
                    {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
                </button>
            </div>

            <div id="app" style={{ height: '100vh' }}>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>

                        {loading && <div>Loading...</div>}
                        {!loading && pieces.length == 0 && <div>You don't have a Fantom Chess Piece</div>}

                        {pieces.map((piece, index) => {
                            return (
                                <div key={index} style={{ padding: 20, width: 250 }}>
                                    {piece.name}
                                    <br></br>
                                    <img src={piece.image.replace('ipfs://', 'https://dweb.link/ipfs/')}></img>

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
