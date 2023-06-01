import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import { fetchCountries } from '../redux/features/countries/countriesSlice';
import covidMap from '../assets/images/covid-map.png';
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
      <div className="map-box">
        <img src={covidMap} alt="world" className="covid-map" />
      </div>
      <h2 className="title">Covid-19 Stats from Different Countries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {countries.map((country) => (
            <div className="card-item" key={country.country}>
              <Link to={`countries/${country.country}`}>
                <p className="right-arrow"><HiArrowCircleRight /></p>
                <h3>{country.country}</h3>
                <p>
                  Cases &#160;
                  {country.cases}
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
