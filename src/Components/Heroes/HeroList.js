import React, { useMemo } from 'react'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';
import 'animate.css';

function HeroList({ publisher }) {
    //Utilizamos useMemo cuando queremos memorizar componentes que no son modificados.
    const heroes = useMemo(() => getHeroesByPublisher({ publisher }), [publisher]);
    // Esto se debe ejecutar si el publisher cambia.-

    return (
        <div class='card-columns m-2  animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}

export default HeroList;