import React from 'react'
import { Link } from 'react-router-dom'

function HeroCard({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) {
    return (
        <div className='card m-3' style={{ maxWidth: 440 }}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={`./assets/heroes/${id}.jpg`} className='card-img-top' alt={superhero} />

                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego !== characters) && <p className='card-text'>{characters}</p>
                        }
                        <p className='card-text'>
                            <small className='text-muted'>First Appearance: {first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>
                            More...
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroCard