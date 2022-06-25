import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../app/store';
import App from '../App';

describe('App should diplay properly in DOM', () => {
  it('App render properly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
