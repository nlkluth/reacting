jest.dontMock('../src/components/Favorite');

import React from 'react';
import { shallow } from 'enzyme';

const Favorite = require('../src/components/Favorite').default;

describe('Favorite', () => {
  it('renders empty (unfavorite) heart', () => {
    const listing = {
      name: 'Estes Park',
      id: '12345',
      picture_url: 'http://placehold.it/250x250'
    };

    const user = {
      favorites: ['22345']
    };

    const wrapper = shallow(
      <Favorite
        listing={listing}
        user={user}
      />
    );

    expect(wrapper.find('i').props().className).toEqual('fa fa-heart-o');
  });

  it('renders full (favorite) heart', () => {
    const listing = {
      name: 'Estes Park',
      id: '12345',
      picture_url: 'http://placehold.it/250x250'
    };

    const user = {
      favorites: ['12345']
    };

    const wrapper = shallow(
      <Favorite
        listing={listing}
        user={user}
      />
    );

    expect(wrapper.find('i').props().className).toEqual('fa fa-heart');
  });
});
