import React from 'react';
import ReactDOM from 'react-dom';
import StageIcon from './StageIcon';
import renderer from 'react-test-renderer';

describe('<StageIcon />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StageIcon />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<StageIcon id='2' name='Caty Flucker' avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' onStage='false' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});