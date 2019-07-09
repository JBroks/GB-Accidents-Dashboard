# Data Dashboard - Accidents in Great Britain (2017)

Stream Two Project: Interactive Frontend Development - Milestone Project.

This is a data dashboard presenting analysis of 2017 road safety statistics for Great Britain.
Statistics are published annually by Department for Transport (DfT).

Dashboard presents accident data analysis in the following four sections:

1. Dashbord heading - first section consists of dashbord title and region selector;
2. Summary totals - second section presents tiles showing annual number of accidents, casualties and vehicles involved;
3. Accident data analysis - third section shows split of annual accident totals by severity level,
   accident totals by road type, and accident severity by road speed limit;
4. Average daily values - fourth section presents average daily figures (accidents and casualties), as well as peak hours
   and peak hour values (accidents and casualties) on an average day;
5. Monthly and hourly profiles - last section presents monthly and hourly distribution of annual number of accidents / casualties / vehicles involved in an accident.

## Demo

Website demo is available [here](https://jbroks.github.io/GB-Accidents-Dashboard/ "GB_Accidents_Dashboard").

![alt text](https://jbroks.github.io/GB-Accidents-Dashboard/static/images/mackbook_dashboard.gif "Gif")


## UX

### UX Design


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




Use this section to provide insight into your UX process, focusing on who this website is for, 
what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

......

## Features

### Existing Features

......

### Features left to implement

.....

## Technologies used

1. HTML
   - The project used **HTML** to define structure and layout of the web page

2. CSS
   - The project used **CSS** stylesheets to specify style of the web document elements

3. JavaScript
   - The project used **Javascript** to implement interactive elemets to the web document

4. [Crossfilter library (1.3.12)](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js)
   - The project used the **Crossfilter.js** library to explore the accidents dataset
   and create dimensions and groups for charts prepared using **DC.js**

5. [DC.js (2.1.8)](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js) and [DC.css (2.1.8)](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.cs)
   - The project used **DC.js** library to set up charts from prebuilt chart types available in the DC library
   - Together with **Crossfilter.js** library it was used to create interactive charts

6. [D3.js (3.5.17)](https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js)
   - **D3.js** library was used to edit and style prebuilt charts provided by **DC.js** library

7. [Queue.js (1.0.7)](https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js)
   - The project used **Queue.js** to bind external datasets (saved in the project folder) to the charts

8. [Bootstrap](https://getbootstrap.com/)
   - The project used **Bootstrap** to create nice grid layout, and position elements within grids

9. [Bootswatch](https://bootswatch.com/)
   - The project used **Bootswatch** "Superhero" theme for setting color pallete and card element to contain each chart

10. [Gifox](https://gifox.io/)
   - Tool was used to record a .gif presented in the demo secion of this README files

11. [Photopea](https://www.photopea.com)
   - Online tool was used to edit the .gif, namely to add it onto a photo

## Testing

css validator: https://jigsaw.w3.org/css-validator/
html validator: https://validator.w3.org/
js validator: https://jshint.com and http://beautifytools.com/javascript-validator.php

chrome developer tools - inspect tool
.....

## Deployment

.......

## Credits

### Content

.......


### Media

......

### Acknowledgements

.......

**This is for educational use.**