import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '..'

afterEach(cleanup);

const project = {
    title: "Travelers Mobile",
    description: "The Travelers mobile application is a React Native based application leveraging AWS and on-prem infrastructure.",
    urls: [
        {
            type: "github",
            url:"http://www.github.com"
        },
        {
            type: "itunes",
            url: "https://apps.apple.com/us/app/travelers-mobile/id354604876#?platform=iphone"
        }
    ],
    imageSRC:"https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/trvMobileApp.jpeg"
}

describe("Project component", () =>{
    it('renders', () => {
        render(<Project project={project}/>);
    });
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Project project={project}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has a Col container with an ID of the Travelers Mobile-col and class col-md-4', () => {
       const {getByTestId} = render(<Project project={project}/>);
       expect(getByTestId('Travelers Mobile-col')).toHaveClass('col-md-4');

    });

    it('has a Card with a project name of Travelers mobile, class of card, and a style with a background using the S3 URL', () => {
        const {getByTestId} = render(<Project project={project}/>);
        expect(getByTestId('Travelers Mobile-card')).toHaveClass('card');
        expect(getByTestId('Travelers Mobile-card')).toHaveAttribute('data-projectname','Travelers Mobile');
        expect(getByTestId('Travelers Mobile-card')).toHaveStyle('background-image: url(https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/trvMobileApp.jpeg)')
 
     });

     /*TODO: Add a test to validate hover render*/
});

