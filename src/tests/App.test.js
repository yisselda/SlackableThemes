import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import PageContainer from '../containers/PageContainer';

Enzyme.configure({ adapter: new Adapter() });

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