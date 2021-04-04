import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..'

afterEach(cleanup);

const activePage = 'portfolio';
const mockSetActivePage = jest.fn();

describe("Header component", () =>{
    it('renders', () => {
        render(<Header activePage={activePage} setActivePage={mockSetActivePage}/>);
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Header activePage={activePage} setActivePage={mockSetActivePage}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has a div with class \'row\' and an id of header', () => {
        const { getByTestId } = render(<Header activePage={activePage} setActivePage={mockSetActivePage}/>);
        expect(getByTestId('header-row')).toHaveClass('row');
        expect(getByTestId('header-row')).toHaveAttribute('id','header')
    });
});

describe("Header Navigation Integration", () =>{
    it('contains the navigation bar', () => {
        const { getByTestId } = render(<Header activePage={activePage} setActivePage={mockSetActivePage}/>);
        expect(getByTestId('navigation-bar')).toHaveClass('col');
        expect(getByTestId('navigation-bar')).toHaveAttribute('id','navigation-bar');
    });

    it('contains the portfolio navigation item as the active item', () => {
        const { getByTestId } = render(<Header activePage={activePage} setActivePage={mockSetActivePage}/>);
        expect(getByTestId('portfolio-nav-item')).toHaveClass('activeSection');
        
    });
});

