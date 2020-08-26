import React from 'react';
import { shallow} from 'enzyme';
import LaunchProfile from '../Components/launchdetails/index';
import { ApolloProvider} from '@apollo/client';



;

test('renders the component', () => {

    const data:any={}

    const component = shallow(<ApolloProvider client={data}><LaunchProfile id={1}></LaunchProfile></ApolloProvider>);
    expect(component).toMatchSnapshot();
  
  
  });