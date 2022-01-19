import React, { useState, Fragment } from 'react'
import Header from '../components/header'

function Index () {
  return (
        <Fragment>
            <div className="geeks"></div>
            <Header staticPage={true} />

            <div id="app" style={{ height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <h1 className='colorGradient'>Roadmap</h1>
                </div>

                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    <div className='mobile-flex' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                            <h3 style={{ margin: 0 }} className='colorGradient'>Fantom Chess</h3>
                            <p>A collection of 555 random generated chess games</p>
                        </div>

                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 30 }}>
                            <p>✅Launch Fantom Chess collection</p>
                            <p>✅Analyze and view your Fantom Chess games</p>
                            <p>✅Display rarity score and ranking</p>
                            <p>✅List on PaintSwap</p>
                            <p>✅List on NFTKEY</p>
                            <p>✅Sellout collection</p>
                            <p>✅Tool to list all Fantom Chess games (after mint)</p>
                        </div>
                    </div>

                    <hr></hr>

                    <br></br>
                    <br></br>

                    <div className='mobile-flex' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                            <h3 style={{ margin: 0 }} className='colorGradient'>Fantom Chess Pieces</h3>
                            <p>A FREE NFT collection just for holders, every holder will get one per Fantom Chess in wallet (1:1)</p>
                        </div>

                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 30 }}>
                            <p>✅Announce Snapshop and Release dates</p>
                            <p>✅02/01/2022 Create Snapshot</p>
                            <p>✅04/01/2022 Airdrop</p>
                            <p>🟦Rarity score and ranking</p>
                            <p>✅List on PaintSwap</p>
                            <p>✅List on NFTKEY</p>
                        </div>
                    </div>

                    <hr></hr>

                    <br></br>
                    <br></br>

                    <div className='mobile-flex' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                            <h3 style={{ margin: 0 }} className='colorGradient'>$CHESS token</h3>
                            <p>ERC20 Token, give back to the community a share of everything Fantom Chess earns :)</p>
                        </div>

                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 30 }}>
                            <p>🟦Create Token</p>
                            <p>🟦Add liquidity (2º sales royalty fees)</p>
                            <p>🟦Airdrop to Fantom Chess/Pieces holders</p>
                            <p>🟦Implement new ways to increase token liquidity (30% of Fantom Chess 3D minting)</p>
                            <p>🟦Create new ways to use the token</p>
                        </div>
                    </div>

                    <hr></hr>

                    <br></br>
                    <br></br>

                    <div className='mobile-flex' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                            <h3 style={{ margin: 0 }} className='colorGradient'>Fantom Chess 3D</h3>
                            <p>A NFT collection of random generated chess games in a 3D world, 30% of minting burned as $CHESS</p>
                        </div>

                        <div style={{ flex: 1, textAlign: 'left', marginLeft: 30 }}>
                            <p>🟦Announce Collection</p>
                            <p>🟦Start minting</p>
                            <p>🟦Analyze and view your Fantom Chess games in 3D \o/</p>
                            <p>🟦Display rarity score and ranking</p>
                            <p>🟦List on PaintSwap</p>
                            <p>🟦List on NFTKEY</p>
                            <p>🟦Sellout collection</p>
                        </div>
                    </div>

                    <hr></hr>

                    <br></br>
                    <br></br>

                    <h3 style={{ margin: 0 }} className='colorGradient'>More soon</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <h3 style={{ margin: 0 }} className='colorGradient'>.</h3>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </Fragment>
  )
}

export default Index
