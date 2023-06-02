import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import store from '../redux/store';

test('renders the Homepage', () => {
  render(
    <Provider store={store}>
      <Router>
        <Homepage />
      </Router>
    </Provider>,
  );
  const headingElement = screen.queryByText(/Stats/i);
  expect(headingElement).toBeInTheDocument();
});
