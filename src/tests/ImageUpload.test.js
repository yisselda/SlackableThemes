import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ImageUpload from '../components/ImageUpload';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageUpload', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageUpload/>);
  })

  it('render <ImageUpload>', () => {
    expect(wrapper).toBeDefined();
  })
});