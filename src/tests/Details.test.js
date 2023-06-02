import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Details', () => {
  const mockStore = configureStore();
  const initialState = {
    countries: {
      loading: false,
      singleItem: {
        country: 'Test Country',
        population: '1000000',
        continent: 'Test Continent',
        recovered: '200000',
        deaths: '5000',
        tests: '10000',
        active: '100000',
        critical: '1000',
      },
    },
  };

  beforeEach(() => {
    useParams.mockReturnValue({ country: 'test-country' });
  });

  it('should render country details', () => {
    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );

    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('1000000')).toBeInTheDocument();
  });
});
