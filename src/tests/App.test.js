import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import PageContainer from '../containers/PageContainer';

describe('App', () => {
  let wrapper;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  beforeEach(() => {
    wrapper = shallow(<App/>);
  })

  it('render a <PageContainer>', () => {
    expect(wrapper.childAt(0).type()).toBe(PageContainer)
  })
});