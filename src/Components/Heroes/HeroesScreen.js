import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import getHeroById from '../../selectors/getHeroById';
import 'animate.css';

function HeroesScreen() {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    // const hero = getHeroById(heroeId);
    const navigate = useNavigate();

    if (!hero) {
        return <Navigate to='/' />
    }

    // Manejo de url si es copiado en otro navegador sin historial previo, redirige al home.-
    const handleReturn = () => {
        if (navigate() !== null) { navigate('/') } else {
            navigate(-1)
        }
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,

    } = hero;
    return (
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-4'>
                    <img src={`../assets/heroes/${heroeId}.jpg`}
                        class='img-thumbnail animate__animated animate__fadeInLeft'
                        alt={superhero} />
                </div>
                <div className='col-8'>
                    <h3> {superhero} </h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{alter_ego}</li>
                        <li className='list-group-item'>{publisher}</li>
                        <li className='list-group-item'>{first_appearance}</li>
                    </ul>
                    <h5>Characters</h5>
                    <p>{characters}</p>
                    <button
                        className='btn btn-outline-info'
                        onClick={handleReturn}
                    >Return</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesScreen;