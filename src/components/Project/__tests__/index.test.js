import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '..'

afterEach(cleanup);


describe("Project component", () =>{
    it('renders', () => {
        render(<Project/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Project/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has a section container rendered with a project-container ID and the required class of pagesParentContainer', () => {
       const {getByTestId} = render(<Project/>);
       expect(getByTestId('project-container')).toHaveClass('pagesParentContainer');
       expect(getByTestId('project-container')).toHaveAttribute('id', 'project-container');

    });
    
    it('has a card for the Travelers Mobile application', () => {
        const {getByTestId} = render(<Project/>);
        expect(getByTestId('Travelers Mobile-card')).toHaveClass('card');
     });

     it('has a project-cards-row with 4 projects (children nodes that represent cards)', () => {
        const {getByTestId} = render(<Project/>);
        expect(getByTestId('projects-card-row')).toHaveClass('row');
        expect(getByTestId('projects-card-row').childElementCount).toEqual(4);

     });

     /*TODO: Add a test to validate hover render*/
});

