import React, { useState, useEffect, Fragment } from 'react'
import rarity from '../src/utils/chessRarity.json'
import Header from '../components/header'
import ReactPaginate from 'react-paginate'

function Index () {
  const [games, setGames] = useState([])

  // pagination
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 20

  const jsonAddress = 'https://dweb.link/ipfs/QmUDCeo781PLz3DncmAGjse1TY78qrUHtWTYeAf7cfq9So/'

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(rarity.slice(itemOffset, endOffset))
    setGames(rarity.slice(itemOffset, itemOffset + itemsPerPage))
    setPageCount(Math.ceil(rarity.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rarity.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  function Item (game) {
    game = game.game

    return (
      <div key={game.id} style={{ padding: 20, width: 300 }}>
        {game.name}
        <br></br>
        <video width='200' muted height='200' autoPlay={true} loop poster={jsonAddress + game.id + '.mp4'} controls>
          <source src={jsonAddress + game.id + '.mp4'} type="video/mp4"></source>
        </video>

        <a className='button' href={'analyse/' + game.id} style={{ width: '50%', marginTop: 10, height: 30, marginLeft: 'auto', marginRight: 'auto' }}>Analyse</a>

        <div style={{ display: 'flex', marginTop: 10 }}>
          <span className='button' style={{ width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none' }} >
            Score: {game.score}
          </span>

          <span className='button' style={{ width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none' }} >
            Rank: #{rarity.indexOf(rarity.filter(x => x.score == game.score)[0]) + 1}
          </span>
        </div>

        <span className='button' style={{ width: '100%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none' }} >
          {game.attributes.find(x => x.trait_type == 'Championship Match').value}
        </span>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="geeks"></div>

      <Header staticPage={true} />

      <div id="app" style={{ height: '100vh' }}>
        <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>

            {games.map(game => {
              return <Item key={game.id} game={game}/>
            })}

            <div id='paginate'>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>

          <br />
        </div>
      </div>
    </Fragment>
  )
}

export default Index
