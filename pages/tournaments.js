import React, { useState, Fragment } from "react";

function Index() {
    return (
        <Fragment>
            <div className="geeks"></div>
            <div className="header">
                <a className="tittle colorGradient" href='/'>Fantom Chess</a>
                <a style={{ marginLeft: 'auto' }} href='/hall-of-fame' className='button'>Hall of Fame</a>
                <a style={{ marginLeft: 'auto' }} href='/' className='button'>Mint a Chess</a>
            </div>

            <div id="app" style={{ height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <h1 className='colorGradient'>We return in 2022</h1>
                </div>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    
                    
                    <div style={{ flex: 1 }}>
                        <h4>See you soon</h4>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Index;