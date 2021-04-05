import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..'

afterEach(cleanup);



describe("Resume component", () =>{
    it('renders', () => {
        render(<Resume/>);
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Resume/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has a Resume section with the proper shared class name for styling (pagesParentContainer)', () => {
        const { getByTestId } = render(<Resume/>);
        expect(getByTestId('resume-container')).toHaveClass('pagesParentContainer');
        expect(getByTestId('resume-container')).toHaveAttribute('id','resume-container')
    });

    it('has a section header of My Resume', () => {
        const { getByTestId } = render(<Resume/>);
        expect(getByTestId('resume-section-header')).toHaveTextContent('My Resume');
    });

    it('has an Architecture table of skills based on the data load with proper class styling (resumeSkillTable)', () => {
        const { getByTestId } = render(<Resume/>);
        expect(getByTestId('Architecture-table')).toHaveClass('resumeSkillTable');
    });

    it('has a resume proficincies section with 4 children based on the dynamic data rendering.', () => {
        const { getByTestId } = render(<Resume/>);
        expect(getByTestId('resume-proficiencies-section')).toHaveClass('row');
        expect(getByTestId('resume-proficiencies-section').childElementCount).toEqual(4);
    });

    it('has a FrontEnd Development Listgroup with 9 skills', () => {
        const { getByTestId } = render(<Resume/>);
        expect(getByTestId('Frontend Development-list-group')).toHaveClass('list-group');
        expect(getByTestId('Frontend Development-list-group').childElementCount).toEqual(9);
    });



});






/*
 (
        <Container fluid data-testid='resume-container' id='resume-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='resume-section-header'>My Resume</h2>

                Architecture-table
*/