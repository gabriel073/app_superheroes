
import { heroes } from '../data/heroes';

function getHeroesByPublisher({ publisher }) {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Invalid publisher ${publisher}, is not a valid publisher`)
    }

    return heroes.filter(hero => hero.publisher === publisher);
}

export default getHeroesByPublisher;

