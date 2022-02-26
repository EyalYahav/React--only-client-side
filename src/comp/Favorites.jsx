import React from 'react'
import { Link } from 'react-router-dom'
import CardBill from './CardBill'

export default function Favorites({favs ,moreInfo, handleClickForFavs}) {
    return (
        <div className='favorites'>
            {
                favs.length?
                favs.map(e=> <CardBill bill={e} favs={favs} handleClickForFavs={handleClickForFavs} key={Math.random()} moreInfo={moreInfo} />)
                : <h4>You have no favorite billionaire! <Link to="/">Go choose</Link></h4>
            }
        </div>
    )
}
