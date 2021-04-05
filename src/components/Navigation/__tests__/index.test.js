import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..'

afterEach(cleanup);

const activePage = 'about';
const mockSetActivePage = jest.fn();

describe("Header component", () =>{
    it('renders', () => {
        render(<Navigation activePage={activePage} setActivePage={mockSetActivePage}/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Navigation activePage={activePage} setActivePage={mockSetActivePage}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
});
