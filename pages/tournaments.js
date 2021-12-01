import React, { useState, Fragment } from "react";

function Index() {
    const [total, setTotal] = useState(100);

    return (
        <Fragment>
            <div className="geeks"></div>
            <div className="header">
                <a className="tittle colorGradient" href='/'>Fantom Chess</a>
                <a style={{marginLeft: 'auto'}} href='/' className='button'>Mint a Chess</a>
            </div>

            <div id="app" style={{ height: '100vh' }}>
                <div  style={{backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                    <h1 className='colorGradient'>4º Fantom Chess Tournament</h1>
                </div>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>

                    <h2 className='colorGradient'>Total Prize pool</h2>
                    <br />
                    <h3>{total} FTM</h3>

                    <br />
                    <br />

                    <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end' }}>
                        <div style={{flex: 1}}>
                            <h3 className='colorGradient'>1º Place (40%)</h3>
                            <h4>{total*0.4} FTM</h4>
                            <h4>+</h4>
                            <h4>🐧Rookie Penguin</h4>
                        </div>

                        <div style={{flex: 1}}>
                            <h3 className='colorGradient'>2º Place (25%)</h3>
                            <h4>{total*0.25} FTM </h4>
                            <h4>+</h4>
                            <h4>♟Fantom Chess</h4>
                        </div>

                        

                        
                    </div>

                    <br />
                    <br />

                    <br />
                    <br />
                    <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end' }}>
                    <div style={{flex: 1}}>
                            <h3 className='colorGradient'>3º Place (20%)</h3>
                            
                            <h4>{total*0.20} FTM</h4>
                        </div>
                    <div style={{flex: 1}}>
                            <h3 className='colorGradient'>4º Place (10%)</h3>
                            
                            <h4>{total*0.10} FTM</h4>

                        </div>

                        <div style={{flex: 1}}>
                            <h3 className='colorGradient'>5º Place (5%)</h3>
                            <h4>{total*0.05} FTM</h4>
                        </div>
                    </div>
                    
                    <br />
                    <br />

                    Sign up for the tournament (It's FREE)


                    <br></br>
                    <br></br>
                    <br></br>
                    <a style={{marginLeft: 'auto', marginRight: 'auto'}} href='https://lichess.org/tournament/lXKW5xWo' className='button'>Sign up</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;