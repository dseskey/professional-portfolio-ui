import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '..'

afterEach(cleanup);


describe("Project component", () =>{
    it('renders', () => {
        render(<Portfolio/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Portfolio/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has a section container rendered with a portfolio-container ID and the required class of pagesParentContainer', () => {
       const {getByTestId} = render(<Portfolio/>);
       expect(getByTestId('portfolio-container')).toHaveClass('pagesParentContainer');
       expect(getByTestId('portfolio-container')).toHaveAttribute('id', 'portfolio-container');

    });
    
    it('has a card for the Travelers Mobile application', () => {
        const {getByTestId} = render(<Portfolio/>);
        expect(getByTestId('Travelers Mobile-card')).toHaveClass('card');
     });

     it('has a project-cards-row with 4 projects (children nodes that represent cards)', () => {
        const {getByTestId} = render(<Portfolio/>);
        expect(getByTestId('projects-card-row')).toHaveClass('row');
        expect(getByTestId('projects-card-row').childElementCount).toEqual(4);

     });

});

