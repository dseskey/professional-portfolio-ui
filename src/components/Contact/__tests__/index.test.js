import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';


afterEach(cleanup);

describe('Contact component', () =>{
    it('renders', () =>{
        render(<Contact/>);
    })
    it('matches snapshot', () => {
        const {asFragment} = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Contact header is visible', () => {
    it('shows Contact header', () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId('contact-form-header')).toHaveTextContent('Contact Me');
    });
});

describe('Submit button is visible', () =>{
    it('contains Submit label', () =>{ 
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    })
})