import React from 'react';
import { shallow, mount } from 'enzyme';
import Launchlist from '../Components/launchlist/launchlist';
import { Fnc } from '../Components/launchlist/types';

describe('Launchlist Component',()=>{

    it('div',()=>{
        
        const props = { data:{},handleIdChange:()=>{}}
        const com = shallow(<Launchlist {... props}></Launchlist>)
        expect(com.find('div').length).toEqual(1);

    })
    it('h4',()=>{
        const props = { data:{},handleIdChange:()=>{}}
        const com = shallow(<Launchlist {... props}></Launchlist>)
        expect(com.find('h4').length).toEqual(1)
    })
});

test('renders the component', () => {

    const props = { data:{},handleIdChange:()=>{}}
        const com = shallow(<Launchlist {... props}></Launchlist>)
    expect(com).toMatchSnapshot();
  
  
  });