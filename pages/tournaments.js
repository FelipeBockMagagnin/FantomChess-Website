import React, { Fragment } from 'react'
import Header from '../components/header'

function Index () {
  return (
        <Fragment>
            <div className="geeks"></div>
            <Header staticPage={true} />

            <div id="app" style={{ overflowY: 'auto' }}>
                <div style={{ backgroundColor: 'white', padding: 20, marginTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '70vw', fontSize: 12 }}>
                    <h1 className='colorGradient'>9º Fantom Chess Tournament</h1>
                </div>
                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll', marginTop: 0 }}>
                    <div className='mobile-flex' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>1º Place</h3>
                            <h4>Fantom Chess 3D #???</h4>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>2º Place</h3>
                            <h4>Fantom Chess 3D #???</h4>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 className='colorGradient'>3º Place</h3>
                            <h4>Fantom Chess 3D #???</h4>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div style={{ flex: 1 }}>
                        <h3 className='colorGradient'>Drops</h3>
                        <h4>1 random player will get a <br />Fantom Chess 3D game during the event <br />(must play at least 1 game)</h4>
                    </div>

                    <br></br>
                    <br></br>

                    <a style={{ marginLeft: 'auto', marginRight: 'auto', width: 250 }} href='https://lichess.org/tournament/l2aWgiLy' target="_blank" className='button' rel="noreferrer">Sign up for FREE</a>
                    <a style={{ marginLeft: 'auto', marginRight: 'auto', width: 250, marginTop: 10 }} href='/' className='button' rel="noreferrer">Mint 3D Chess Game</a>

                </div>
            </div>
        </Fragment>
  )
}

export default Index
