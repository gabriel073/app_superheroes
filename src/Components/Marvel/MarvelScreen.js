import React from 'react'
import HeroList from '../Heroes/HeroList'

function MarvelScreen() {
    return (
        <div>
            <h1>Marvel</h1>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}

export default MarvelScreen;