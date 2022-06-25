import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import CountryInfo from '../../pages/CountryInfo';

describe('display countryInfo components', () => {
  test('test if countryInfo component renders in the dom', () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryInfo />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Where is the world?/)).toBeNull();
  });
  test('snapshot renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CountryInfo />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
