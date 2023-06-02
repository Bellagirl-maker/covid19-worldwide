import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleCountry } from '../redux/features/countries/countriesSlice';
import '../styles/Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.countries.loading);
  const getCountry = useSelector((state) => state.countries.singleItem);
  const { country } = useParams();

  useEffect(() => {
    if (country) {
      dispatch(singleCountry({ country }));
    }
  }, [dispatch, country]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="details">
          <h2 className="Country">{getCountry.country}</h2>
          <ul className="country-data">
            <li className="deep">
              <li>Population</li>
              <li>{getCountry.population}</li>
            </li>
            <li className="light">
              <li>Continent</li>
              <li>{getCountry.continent}</li>
            </li>
            <li className="deep">
              <li>Recovered</li>
              <li>{getCountry.recovered}</li>
            </li>
            <li className="light">
              <li>Deaths:</li>
              <li>{getCountry.deaths}</li>
            </li>
            <li className="deep">
              <li>Tests</li>
              <li>{getCountry.tests}</li>
            </li>
            <li className="light">
              <li>Active</li>
              <li>{getCountry.active}</li>
            </li>
            <li className="deep">
              <li>Critical</li>
              <li>{getCountry.critical}</li>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Details;
