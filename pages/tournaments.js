// import React, { useState, useEffect, Fragment } from "react";
// let Web3 = require("web3");
// import Image from 'next/image'
// import Swal from 'sweetalert2'
// import axios from "axios";

// function Index() {
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         axios.get('https://api.ftmscan.com/api?module=account&action=txlist&address=0x46350eda48b3aafc4c403ff02c024e76ae22e803&startblock=22723213&endblock=99999999&sort=asc&apikey=4U6J2QNXT1YWESGVETQJZ86YT2MP4MUG2M ')
//         .then(data => {
//             console.log(data.data);

//             let onlyMints = data.data.result.filter(x => x.input == '0x4e71d92d' && x.isError == 0 && x.from != "0xfc3778f4b877b25a2a6b501a6bd987bb6b43f7e0");
//             console.log(onlyMints);

//             let totalPrize = 20000000000000000000;
            
//             onlyMints.forEach(x => {
//                 totalPrize += Number(x.value)
//             })

//             console.log(totalPrize/1000000000000000000);

//             totalPrize = totalPrize/1000000000000000000*0.5;

//             setTotal(totalPrize);
//         })
//     }, []);



//     return (
//         <Fragment>
//             <div className="geeks"></div>
//             <div className="header">
//                 <a className="tittle colorGradient" href='/'>Fantom Chess</a>
//             </div>

//             <div id="app" style={{ height: '100vh' }}>
//                 <div  style={{backgroundColor: 'white', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
//                     <h1 className='colorGradient'>3º Fantom Chess Tournament</h1>
//                 </div>
//                 <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>

//                     <h2 className='colorGradient'>Total Prize pool</h2>
//                     <br />
//                     <h3>{total} FTM</h3>

//                     <br />
//                     <br />

//                     <div className='mobile-flex' style={{ display: "flex", alignItems: 'flex-end' }}>
//                         <div style={{flex: 1}}>
//                             <h3 className='colorGradient'>1º Place (60%)</h3>
//                             <h4>{total*0.6} FTM</h4>
//                         </div>

//                         <div style={{flex: 1}}>
//                             <h3 className='colorGradient'>2º Place (25%)</h3>
//                             <h4>{total*0.25} FTM</h4>
//                         </div>

//                         <div style={{flex: 1}}>
//                             <h3 className='colorGradient'>3º Place (15%)</h3>
//                             <h4>{total*0.15} FTM</h4>
//                         </div>
//                     </div>
//                     <br />
//                     <br />

//                     Sign up for the tournament <a style={{color: "blue", textDecoration: 'underline'}} href='https://lichess.org/tournament/1P2D5s9V'>here</a> (It's FREE)

//                     <br />
//                     <br />


//                     <p>Each Fantom Chess minted add <p className='colorGradient'>10 FTM</p> to the prize pool.</p>
//                     <br></br>
//                     <a style={{marginLeft: 'auto', marginRight: 'auto'}} href='/' className='button'>Mint</a>
//                 </div>
//             </div>
//         </Fragment>
//     );
// }

// export default Index;
