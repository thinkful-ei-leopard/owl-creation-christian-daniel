import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import renderer from 'react-test-renderer';

describe('<Chat />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat participantId={3} type='message' message='Hello world' time='1548852646559' timestamp='1548852484247' />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // it('renders the UI as expected', () => {
    //     const tree = renderer
    //         .create(<Chat id='2' name='Caty Flucker' avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' inSession='true' onStage='false' />)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});