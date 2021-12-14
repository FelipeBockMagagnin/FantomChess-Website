import React, { useState, Fragment } from "react";
import Header from "../components/header";

function Index() {
    return (
        <Fragment>
            <div className="geeks"></div>
            <Header staticPage={true} />

            <div id="app" style={{ height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <h1 className='colorGradient'>6º Fantom Chess Tournament</h1>
                </div>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end' }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{margin: 0}} className='colorGradient'>1º Place</h3>
                            <h4 style={{marginBottom: 0}}>♟RARE Fantom Chess NFT game</h4>
                            <h5 style={{margin: 0}}>(Serper vs I Nikolaidis, 1993)</h5>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>2º Place</h3>
                            <h4>♟Fantom Chess NFT game</h4>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>3º Place</h3>
                            <h4>♟Fantom Chess NFT game</h4>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    
                    <div style={{ flex: 1 }}>
                        <h3 className='colorGradient'>Drops</h3>
                        <h4>2 random players will get a Fantom Chess game</h4>
                    </div>

                    <br></br>
                    <br></br>
                    <a style={{ marginLeft: 'auto', marginRight: 'auto' }} href='https://lichess.org/tournament/35BpVuFz' className='button'>Sign up for FREE</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;