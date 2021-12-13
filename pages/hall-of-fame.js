import React, { useState, Fragment } from "react";

function Index() {
    const winners = [
        {
            name: '1º Fantom Chess tournament',
            winners: [
                "thebruhlord", "StegoStone", "arantespp"
            ],
            link: 'https://lichess.org/tournament/OvpWvkxI'
        },
        {
            name: '2º Fantom Chess tournament',
            winners: [
                "thebruhlord", "codear", "Sigiward"
            ],
            link: 'https://lichess.org/tournament/4ZqFZ8Fp'
        },
        {
            name: '3º Fantom Chess tournament',
            winners: [
                "whitetigerxrp", "Lelzky", "thebruhlord"
            ],
            link: 'https://lichess.org/tournament/1P2D5s9V'
        },
        {
            name: '4º Fantom Chess tournament',
            winners: [
                "dfsocial", "killer311", "lorenzo_wb"
            ],
            link: 'https://lichess.org/tournament/lXKW5xWo'
        },
        {
            name: '5º Fantom Chess tournament',
            winners: [
                "Praizess", "Subject-18", "Romestado"
            ],
            link: 'https://lichess.org/tournament/nSG5Z8aV'
        },
    ];

    return (
        <Fragment>
            <div className="geeks"></div>
            <div className="header">
                <a className="tittle colorGradient" href='/'>Fantom Chess</a>
                <a style={{ marginLeft: 'auto' }} href='/' className='button'>Mint a Chess</a>
            </div>

            <div id="app" style={{ height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <h1 className='colorGradient'>Hall of Fame</h1>
                </div>

                <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
                    {winners && winners.map(data => {
                        return <div>
                            <h2 className='colorGradient'>{data.name}</h2>
                            <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end', marginTop: 25 }}>
                                <div style={{ flex: 1 }}>
                                    <h3 className='colorGradient'>1º Place</h3>
                                    <h4>{data.winners[0]}</h4>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 className='colorGradient'>2º Place</h3>
                                    <h4>{data.winners[1]}</h4>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 className='colorGradient'>3º Place</h3>
                                    <h4>{data.winners[2]}</h4>
                                </div>
                            </div>

                            <a style={{ marginLeft: 'auto', marginRight: 'auto', height: 25, width: 100, marginBottom: 30 }} target='_blank' href={data.link} className='button'>Link</a>
                            <hr style={{marginBottom: 30}}></hr>
                        </div>
                    })}
                <br></br>
            </div>
        </div>
        </Fragment >
    );
}

export default Index;