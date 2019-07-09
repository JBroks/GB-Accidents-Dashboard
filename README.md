# Data Dashboard - Accidents in Great Britain (2017)

Stream Two Project: Interactive Frontend Development - Milestone Project.

This is a data dashboard presenting analysis of 2017 road safety statistics for Great Britain and each region separately. 
Statistics are published annually by Department for Transport (DfT).

## Demo

Website demo is available [here](https://jbroks.github.io/GB-Accidents-Dashboard/ "GB_Accidents_Dashboard").

![alt text](https://jbroks.github.io/GB-Accidents-Dashboard/static/images/mackbook_dashboard.gif "Gif")

## UX

### UX Design

My goal in this design was to create a dashboard that would make a maximum use of the analysed dataset while striving for a minimalist design. 

The project aim was to create a dashboard with a simple and modern feel by implementing tile design where each charts is placed in a separate tile.

Color pallete also strives for simplicity implementing dark background colors, off-white fonts, and bright and colorful charts.
In most of the cases chart colors were adjusted to emphasise importance / seriousness of each category i.e. casualties / fatal accidents category was represented by red thoughout the dashboard,
accidents /  serious accidents category was represented by orange, and vehicles involved / slight accidents category was represented by more neutral blue.

### Target Audience

This dashboard constitutes a useful analytical tool for transport planners, transport modellers and road desing engineers
in a private as well as planners and policy makers in a public sector. The main objective of this particular dashboard is to 
provide an insight into accident data to transport planning professionals.

This dashboard provides a user with understanding of the road safety situation in Great Britain as a whole as well as in each region separately.
The project provides an information about accidents severity, location and speed limit analysis. Dashboards provides its user with an insight into
a monthly and hourly accident profiles for the whole year as well as average daily and peak hour statistics.

### User Stories

The following user stories were used to design this data dashboard:
- As a transport planner I would like to gain an understanding into accident and safety data in order to 
     include this analysis into my transport model;
- As a transport planner I would like to understand likelihood of incident occurence on a certain road type to include
     valid recommendations for road safety improvements;
   - As a road designer I want to understand likelihood of incident occurence on a certain road type to include
     appropriate safety measures into my road design;
   - As a transport representative in a local council I would like to gain an understanding into the safety situation in my region
     so I can decide if any safety measures should be implemented in the future;
   - As a transport planner I would make a use of the accident statistics in Transport Scheme Business Case preparation,
     precisely in cost benefit analysis;
   - As a road safety auditor I would like to review the accident data to understand which road types are the most critical so I can
     pay extra attention to them during my audits;
   - As a transport researcher I would use the statistics in my thesis / paper to describe the current safety situation in Great Britain
     and each region separately;
   - As a planner / policy maker I would use analysis coming from the dashboard to include it in regional development plans to describe
     the current safety situation;

### Mockups & Wireframes

The follwoing wireframe sketches were created to design the dashboard layout options:
   - [Mobile display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/Wireframes%20%26%20mockups/Mobile_Display_Wireframe.pdf)
   - [Medium display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/Wireframes%20%26%20mockups/Medium_Display_Wireframe.pdf)
   - [Desktop display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/Wireframes%20%26%20mockups/Desktop_Display_Wireframe.pdf)

Additionally [this](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/Wireframes%20%26%20mockups/Dashboard_mockup.png) mockup for a desktop display was created using **Adobe XD**.

## Features

### Existing Features

Dashboard presents accident data analysis in the following four sections:

1. Dashbord heading - first section consists of dashbord title and region selector;
2. Summary totals - second section presents tiles showing annual number of accidents, casualties and vehicles involved;
3. Accident data analysis - third section shows split of annual accident totals by severity level,
   accident totals by road type, and accident severity by road speed limit;
4. Average daily values - fourth section presents average daily figures (accidents and casualties), as well as peak hours
   and peak hour values (accidents and casualties) on an average day;
5. Monthly and hourly profiles - last section presents monthly and hourly distribution of annual number of accidents / casualties / vehicles involved in an accident.

......

### Features left to implement

.....

## Technologies used

### Programming languages

- HTML - The project used **HTML** to define structure and layout of the web page

- CSS - The project used **CSS** stylesheets to specify style of the web document elements

- JavaScript - The project used **Javascript** to implement interactive elemets to the web document

### Libraries
- [Crossfilter library (1.3.12)](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js) - The project used the **Crossfilter.js** library to explore the accidents dataset
   and create dimensions and groups for charts prepared using **DC.js**

- [DC.js (2.1.8)](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js) and [DC.css (2.1.8)](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.cs)
   - The project used **DC.js** library to set up charts from prebuilt chart types available in the DC library
   - Together with **Crossfilter.js** library it was used to create interactive charts

- [D3.js (3.5.17)](https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js) - **D3.js** library was used to edit and style prebuilt charts provided by **DC.js** library

- [Queue.js (1.0.7)](https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js) - The project used **Queue.js** to bind external datasets (saved in the project folder) to the charts

- [Bootswatch](https://bootswatch.com/) - The project used **Bootswatch** "Superhero" theme for setting color pallete and card element to contain each chart

### Frameworks

- [Bootstrap](https://getbootstrap.com/) - The project used **Bootstrap** to create nice grid layout, and position elements within grids

### Other

- [Gifox](https://gifox.io/) - Tool was used to record a .gif presented in the demo secion of this README files

- [Photopea](https://www.photopea.com) - Online tool was used to edit the .gif, namely to add it onto a photo

- [Adobe XD](https://www.adobe.com/ie/products/xd.html) - Software was used to create a project mockup **Cloud9** system

## Testing

css validator: https://jigsaw.w3.org/css-validator/
html validator: https://validator.w3.org/
js validator: https://jshint.com and http://beautifytools.com/javascript-validator.php

chrome developer tools - inspect tool
.....

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/JBroks/GB-Accidents-Dashboard.git into your terminal`. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

## Credits

### Content

- Accident datasets were downloaded from the [DfT website](https://data.gov.uk/dataset/cb7ae6f0-4be6-4935-9277-47e5ce24a11f/road-safety-data)

### Media

- Photo used in demo gif preparation was sourced from [here](https://214.co/case-study/batsu/laptop-module-template/)

### Acknowledgements

.......

**This is for educational use.**