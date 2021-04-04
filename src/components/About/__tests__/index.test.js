import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..'

afterEach(cleanup);


describe("About component", () =>{
    it('renders', () => {
        render(<About/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
    
    it('has a div with class \'row\' and an id of about-container with proper styles', () => {
        const { getByTestId } = render(<About/>);
        expect(getByTestId('about-container')).toHaveClass('container-fluid');
        expect(getByTestId('about-container')).toHaveAttribute('id','about-container');
        expect(getByTestId('about-container')).toHaveStyle(`margin-left: 2em, margin-right: 2em)`);
    });

    it('has at least one component with aboutTextSection class with proper styles', () => {
        const { getByTestId } = render(<About/>);
        expect(getByTestId('about-text-section')).toHaveStyle(`margin-bottom: 2em, margin-top: 2em, font-weight: 500 )`);

    });
});

