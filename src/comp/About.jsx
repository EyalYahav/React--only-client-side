import React from 'react'
import CardAbout from './CardAbout'

export default function About({ favs, handleClickForFavs, about }) {
    return (
        <div className='aboutDiv'>
            <CardAbout bill={about} favs={favs} handleClickForFavs={handleClickForFavs}/>
        </div>
    )
}
