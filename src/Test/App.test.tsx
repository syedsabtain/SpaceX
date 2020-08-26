import React from 'react';
import { shallow} from 'enzyme';
import App from '../Components/App/App';


describe('Testing App component Elements',()=>{

  it('Div',()=>{

    const component = shallow(<App></App>);

    expect(component.find('div').length).toEqual(6);

  });

  it('Button',()=>{
    const component = shallow(<App></App>);
    expect(component.find('button').length).toEqual(1);
  });

  it('ul and li',()=>{
    const component = shallow(<App></App>);
    expect(component.find('ul').length).toEqual(1);
    expect(component.find('li').length).toEqual(2)
  })
});

test('renders the component', () => {


  const component = shallow(<App />);
  expect(component).toMatchSnapshot();


});
