# Dan Seskey - Professional Portfolio

Welcome to the repository of my professional portfolio! This application was built using a ##template React app absed on the create-react-app CLI. 

## About the application
The application, which can be accessed [here](https://dseskey.github.io/portoflio) contains four sections 

### Sections
The application is split into four sections: About Me, Portfolio, Contact and Resume.

#### About Me
The About Me section contains a short biography and photo of me as seen in the video below. Additionally in this video, you can see a few other features of the application:

1) Common Footer: The common footer has social media icons to Linkedin and Github that navigate to the respective sites. Additioanlly, the icons become bright and turn blue when overing.
2) Commen Header: A common header and navigation that shows the active section (bright white, weight of 800, and underlined). Additionally, the navigation bar turns into a hamburger menu when in smaller viewports.
3) The application scales to smaller viewports.

![About Me Walkthrough](https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/AboutMeSectionRecording.gif)

#### Portfolio
The Portfolio section contains a list of 4 projects that I have worked on. Unfortunately, these are the only projects that can be discussed publicly and not all have resources such as a public Github page. Each card is rendered using a separate Project component for modular design, resuability, and testability. The cards show the "onMouseEnter" and "onMouseExit" events to show the sub cards with the project details.

As seen in the video below, when the Portfolio navigation item was selected, it was identified as active by adding the styling for an activeSection class (white, weight 800, underline).

![Portfolio Walkthrough](https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/PortfolioSectionVideo.gif)

#### Contact
The contact section contains a quick form that is validated on the front end (not backend connection as of 4/5/2021). Each field detects the onBlur event when the user leaves the field to check if the input is valid. If the input is invalid, the red alert banenr is shown.

![Contact Walkthrough](https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/ContactSectionVideo.gif)

#### Resume
Lastly, the Resume section contains a list of proficiencies of various types and a downloadable resume. Note, the tables that show the skills should have been written as a reusable component, however it was left this way so students can compare and contract the Resume section to the Portfolio section.

![Resume Walkthrough](https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/ResumeSectionVideo.gif)

### Additional Libraries

The application was written using several reusable React libaries such as:

## [React Bootstrap](https://react-bootstrap.github.io)
The React Bootstrap library promotes reusable components for items such as layouts, cards, navigation, etc. This library was used for the project cards shown in the Portfolio section, layouts across the application, form fields and alert banners in the Contact section, mobile and desktop nav items in the Navigation component, and more!

## [React Social Icons](https://github.com/jaketrent/react-social-icons#readme)
The React Social Icons library provided the social media icons you see across the application. This includes the Github and Linkedin icons in the footer, and the Github, iTunes Store, and Youtube icons shown on the project cards.

# Running Locally
To run locally, clone the repository to your machine. Navigate to the project directory where the code was saved and run the following commands:

### `npm install` 

Installs all necessary libraries required for the application.

### `npm start`

Runs the application in development mode on your local machine. Upon starting, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. These tests include component level test as well as tests integrations of child components into their parents. For example, when testing the Header there is a test to ensure the Navigation component rendered as well. Additionally, the Portfolio tests check how many Project components were rendered.

