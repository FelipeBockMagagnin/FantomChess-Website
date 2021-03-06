import React from 'react'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <div className="header">
            <a className="tittle colorGradient" href='/'>Fantom Chess</a>

            <div className='menus'>
                <div className="primary-navigation">
                    <ul style={{padding: 0}}>
                        <li>
                            <a href="#">Fantom Chess 3D</a>
                            <ul className="dropdown">
                                <li><a href="/">About/Mint</a></li>
                                <li><a href="/chess-3d/view">My Games</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Fantom Chess 2D</a>
                            <ul className="dropdown">
                                <li><a href="/chess-2d">About/Mint</a></li>
                                <li><a href="/chess-2d/view">My Games</a></li>
                                <li><a href="/chess-2d/rarity">Rarity</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#">Fantom Chess Pieces</a>
                            <ul className="dropdown">
                                <li><a href="/pieces/about">About</a></li>
                                <li><a href="/pieces/view">My Pieces</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>

                        <li>
                            <a href="/tournaments">Tournaments</a>
                        </li>
                    </ul>
                </div>

            </div>

            {!staticPage && <button className='button' onClick={wallet}>
                {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
            </button> }
        </div>
    )
}