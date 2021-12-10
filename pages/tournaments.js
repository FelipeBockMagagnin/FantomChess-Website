import React, { useState, Fragment } from "react";

function Index() {
    const [total, setTotal] = useState(100);

    return (
        <Fragment>
            <div className="geeks"></div>
            <div className="header">
                <a className="tittle colorGradient" href='/'>Fantom Chess</a>
                <a style={{ marginLeft: 'auto' }} href='/' className='button'>Mint a Chess</a>
            </div>

            <div id="app" style={{ height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <h1 className='colorGradient'>5º Fantom Chess Tournament</h1>
                </div>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end' }}>
                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>1º Place</h3>
                            <h4>♟Fantom Chess NFT game</h4>
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 className='colorGradient'>Drops</h3>
                        <h4>1 random player will get a Fantom Chess game</h4>
                    </div>

                    <br></br>
                    <br></br>
                    <a style={{ marginLeft: 'auto', marginRight: 'auto' }} href='https://lichess.org/tournament/nSG5Z8aV' className='button'>Sign up for FREE</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;