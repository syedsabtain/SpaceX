
import React from 'react';
import { shallow} from 'enzyme';
import Launchdetails from '../Components/launchdetails/launchdetails';




describe('LaunchDetails',()=>{

    it('div',()=>{
        const data={}
        const com = shallow(<Launchdetails data={data}></Launchdetails>);

        expect(com.find('div').length).toEqual(3)
    });
    it('h4',()=>{

        const data={}
        const com = shallow(<Launchdetails data={data}></Launchdetails>);

        expect(com.find('h4').length).toEqual(4)
    })
});

test('renders the component', () => {

    const data={}
        const com = shallow(<Launchdetails data={data}></Launchdetails>);
    expect(com).toMatchSnapshot();
  
  
  });