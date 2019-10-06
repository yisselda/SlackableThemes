import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WorkspaceSideBar from '../components/WorkspaceSideBar';


Enzyme.configure({ adapter: new Adapter() });

describe("WorkspaceSideBar", () => {
    it("should render workspace side bar", () => {
        const { container } = shallow(<WorkspaceSideBar/>);
        expect(container).toMatchSnapshot();
    })

})

