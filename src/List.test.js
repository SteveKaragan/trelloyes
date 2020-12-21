import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('Messages', () => {
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');
    
        // render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<List />, div);
    
        // clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List />)
        .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});