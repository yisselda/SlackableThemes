import React from 'react';
import { shallow } from 'enzyme';
import ImageUpload from '../components/ImageUpload';

describe('ImageUpload', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageUpload/>);
  })

  it('render <ImageUpload>', () => {
    expect(wrapper).toBeDefined();
  })


});