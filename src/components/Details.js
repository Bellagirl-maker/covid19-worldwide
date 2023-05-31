import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleCountry } from '../redux/features/countries/countriesSlice';
import '../styles/Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.countries.Loading);
  const getCountry = useSelector((state) => state.countries.singleItem);
  const params = useParams();

  useEffect(() => {
    dispatch(singleCountry(params.country));
  }, [dispatch, params.country]);

  return (

    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (

        <div className="details">

          {getCountry.country}
          <p>
            {getCountry.population}
            {' '}
          </p>
          <p>
            {getCountry.continents}
            {' '}
          </p>
          <p>
            {getCountry.recovered}
            {' '}
          </p>
          <p>
            {getCountry.deaths}
            {' '}
          </p>
          <p>
            {getCountry.tests}
            {' '}
          </p>
          <p>
            {getCountry.active}
            {' '}
          </p>
          <p>
            {getCountry.critical}
            {' '}
          </p>
        </div>
      )}
    </div>

  );
};

export default Details;
