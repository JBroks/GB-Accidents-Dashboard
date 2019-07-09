# Data Dashboard - Accidents in Great Britain (2017)

Stream Two Project: Interactive Frontend Development - Milestone Project.

This is a data dashboard presenting 2017 road safety statistics for Great Britain.
Statistics are published annually by Department for Transport (DfT).

The dashboard can constitute a useful analytical tool for transport planners, modellers and road desing engineers
in a private as well as public sector.

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

5. [DC.js](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js) and [DC.css](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.cs) (2.1.8)
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