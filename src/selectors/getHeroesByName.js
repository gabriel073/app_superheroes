
import { heroes } from '../data/heroes'

function getHeroesByName(name = '') {

    if (name === '') return [];
    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))
}

export default getHeroesByName;