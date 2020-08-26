import React from 'react';
import { shallow} from 'enzyme';
import List from '../Components/launchlist/index'
import { ApolloProvider } from '@apollo/client';






test('renders the component', () => {

    const data:any={}

    const component = shallow(<ApolloProvider client={data}><List handleIdChange={()=>{}}></List></ApolloProvider>);
    expect(component).toMatchSnapshot();
  
  
  });