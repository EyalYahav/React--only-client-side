import React from 'react'
import CardBill from './CardBill'

export default function Main({ handleClickForFavs, moreInfo, billionaires, value, favs }) {

    return (
        <div className='main'>
            {
                billionaires.filter(e => e.person.name.toLowerCase().includes(value)).map(e => <CardBill favs={favs} moreInfo={moreInfo} handleClickForFavs={handleClickForFavs} key={Math.random()} bill={e} />)
            }
        </div>
    )
}
