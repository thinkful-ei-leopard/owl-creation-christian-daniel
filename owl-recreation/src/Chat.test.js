import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import renderer from 'react-test-renderer';

describe('<Chat />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // it('renders the UI as expected', () => {
    //     const tree = renderer
    //         .create(<Chat id='2' name='Caty Flucker' avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' inSession='true' onStage='false' />)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});