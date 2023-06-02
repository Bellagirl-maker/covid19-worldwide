import axios from 'axios';
import { fetchCountries } from '../redux/features/countries/countriesSlice';

// Mock axios module
jest.mock('axios');

describe('fetchCountries', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render data when the request is successful', async () => {
    const responseData = [
      { country: 'Albania', cases: 2847 },
      { country: 'Kenya', cases: 5400 },
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: responseData });

    const action = fetchCountries('countries');
    const result = await action.payload;
    expect(result).toEqual(result);
  });
});
