import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../redux/features/countries/countriesSlice';
import '../styles/Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const loading = useSelector((state) => state.countries.Loading);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {countries.map((country) => (
            <div className="card" key={country.country}>
              <Link to={`countries/${country.country}`}>
                <h3>{country.country}</h3>
                <p>
                  {country.cases}
                  {' '}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
