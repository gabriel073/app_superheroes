import React, { useMemo } from 'react'
import queryString from 'query-string';
import HeroCard from '../Heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import getHeroesByName from '../../selectors/getHeroesByName';

function SearchScreen() {
    const location = useLocation();
    const navigate = useNavigate();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltrered = useMemo(() => getHeroesByName(q), [q]);;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }



    return (
        <div className=''>
            <h4>Search Screen</h4>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            placeholder="Find your hero"
                            className='form-control mb-3'
                            autoComplete='off'
                        />
                        <button
                            type="submit"
                            className='btn btn-primary'
                            value={"Search"}
                            onClick={handleSearch}
                        >Search</button>
                    </form>

                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {/* // Validation if the search is empty */}
                    {/* // eslint-disable-next-line no-lone-blocks */}
                    {
                        (q === '') &&
                        <div className='alert alert-info'>
                            Search a hero.
                        </div>
                    }
                    {/* // Validation if the search is not empty and there is no hero with the search */}
                    {/* // eslint-disable-next-line no-lone-blocks */}
                    {
                        (q !== '' && heroesFiltrered.length === 0) &&
                        <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>
                    }
                    {
                        heroesFiltrered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default SearchScreen;