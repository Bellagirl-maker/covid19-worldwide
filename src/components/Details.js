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
              <p>Population</p>
              <p>{getCountry.population}</p>
            </li>
            <li className="light">
              <p>Continent</p>
              <p>{getCountry.continent}</p>
            </li>
            <li className="deep">
              <p>Recovered</p>
              <p>{getCountry.recovered}</p>
            </li>
            <li className="light">
              <p>Deaths</p>
              <p>{getCountry.deaths}</p>
            </li>
            <li className="deep">
              <p>Tests</p>
              <p>{getCountry.tests}</p>
            </li>
            <li className="light">
              <p>Active</p>
              <p>{getCountry.active}</p>
            </li>
            <li className="deep">
              <p>Critical</p>
              <p>{getCountry.critical}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Details;
