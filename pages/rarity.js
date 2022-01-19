import React, { useState, useEffect, Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import rarity from '../src/utils/chessRarity.json'
import Header from '../components/header'

function Index () {
  const [games, setGames] = useState([])

  const [soundRarityFilter, setSoundRarityFilter] = useState(null)
  const [rarityFilter, setRarityFilter] = useState(null)
  const [resultRarityFilter, setResultRarityFilter] = useState(null)

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

    let items = rarity

    if (rarityFilter) {
      if (rarityFilter === 'commom') {
        items = items.filter(x => x.attributes[3].value === 'none')
      } else {
        items = items.filter(x => x.attributes[3].value !== 'none')
      }
    }

    if (soundRarityFilter) {
      items = items.filter(x => x.attributes[2].value === 'Sound ' + soundRarityFilter)
    }

    if (resultRarityFilter) {
      items = items.filter(x => x.attributes[4].value.toLocaleLowerCase().includes(resultRarityFilter))
    }

    console.log(items)

    setCurrentItems(items.slice(itemOffset, endOffset))
    setGames(items.slice(itemOffset, itemOffset + itemsPerPage))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, rarityFilter, soundRarityFilter, resultRarityFilter])

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
        <br />
        <video width="200" muted height="200" autoPlay loop poster={`${jsonAddress + game.id}.mp4`} controls>
          <source src={`${jsonAddress + game.id}.mp4`} type="video/mp4" />
        </video>

        <a
          className="button"
          href={`analyse/${game.id}`}
          style={{
            width: '50%', marginTop: 10, height: 30, marginLeft: 'auto', marginRight: 'auto'
          }}
        >
          Analyse
        </a>

        <div style={{ display: 'flex', marginTop: 10 }}>
          <span
            className="button"
            style={{
              width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none'
            }}
          >
            Score:
            {' '}
            {game.score}
          </span>

          <span
            className="button"
            style={{
              width: '50%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none'
            }}
          >
            Rank: #
            {rarity.indexOf(rarity.filter((x) => x.score == game.score)[0]) + 1}
          </span>
        </div>

        <span
          className="button"
          style={{
            width: '100%', fontSize: 11, height: 30, borderRadius: 0, backgroundColor: '#000', animation: 'none'
          }}
        >
          {game.attributes.find((x) => x.trait_type == 'Championship Match').value}
        </span>
      </div>
    )
  }

  return (
    <>
      <div className="geeks" />

      <Header staticPage />

      <div id="app" style={{ height: '100vh' }}>
        <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
          <div className='filters' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
              <h3 className='colorGradient'>Filters</h3>
            </div>

            <div>
              <div className="dropdown">
                <button className="dropbtn">Winner  <br/> <span style={{ fontSize: 14 }}>{resultRarityFilter}</span></button>
                <div className="dropdown-content">
                  <a onClick={() => setResultRarityFilter('draw')}>Draw</a>
                  <a onClick={() => setResultRarityFilter('white')}>White Wins</a>
                  <a onClick={() => setResultRarityFilter('black')}>Black Wins</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">
                  Sound
                  {soundRarityFilter && (<><br/><span style={{ fontSize: 14 }}>Sound {soundRarityFilter}</span></>)}
                </button>
                <div className="dropdown-content">
                  <a onClick={() => setSoundRarityFilter('0')}>Sound 0</a>
                  <a onClick={() => setSoundRarityFilter('1')}>Sound 1</a>
                  <a onClick={() => setSoundRarityFilter('2')}>Sound 2</a>
                  <a onClick={() => setSoundRarityFilter('3')}>Sound 3</a>
                  <a onClick={() => setSoundRarityFilter('4')}>Sound 4</a>
                  <a onClick={() => setSoundRarityFilter('5')}>Sound 5</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Rarity <br/> <span style={{ fontSize: 14 }}>{rarityFilter}</span></button>
                <div className="dropdown-content">
                  <a onClick={() => setRarityFilter('commom')}>Commom</a>
                  <a onClick={() => setRarityFilter('rare')}>Rare</a>
                </div>
              </div>
            </div>

            <div>
              <div className='dropdown'>
                <button className="dropbtn" onClick={() => {
                  setRarityFilter(null)
                  setResultRarityFilter(null)
                  setSoundRarityFilter(null)
                }}>
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>

            {games.length === 0 && <div style={{textAlign: 'center', width: '100%', marginTop: 30}}>No games</div> }

            {games.map((game) => <Item key={game.id} game={game} />)}

            <div id="paginate">
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
    </>
  )
}

export default Index
