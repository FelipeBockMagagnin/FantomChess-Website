import React from 'react'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <div className="header">
            <a className="tittle colorGradient" href='/'>Fantom Chess</a>

            <div className='menus'>
                <div class="primary-navigation">
                    <ul style={{padding: 0}}>
                        <li>
                            <a href="#">Fantom Chess</a>
                            <ul class="dropdown">
                                <li><a href="/chess-2d">About/Mint</a></li>
                                <li><a href="/chess-2d/view">My Games</a></li>
                                <li><a href="/chess-2d/rarity">Rarity</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="#">Fantom Chess Pieces</a>
                            <ul class="dropdown">
                                <li><a href="/pieces/about">About</a></li>
                                <li><a href="/pieces/view">My Pieces</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>

                        <li>
                            <a href="#">Tournaments</a>
                            <ul class="dropdown">
                                <li><a href="/tournaments">Sign Up</a></li>
                                <li><a href="/hall-of-fame">Hall of Fame</a></li>
                            </ul>
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