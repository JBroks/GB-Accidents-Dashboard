# Data Dashboard - Accidents in Great Britain (2017)

Stream Two Project: Interactive Frontend Development - Milestone Project.

![alt text](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/gif/various-displays.gif "Gif")

This is a data dashboard presenting analysis of 2017 road safety statistics for Great Britain.
Statistics are published annually by [Department for Transport (DfT)](https://www.gov.uk/government/organisations/department-for-transport).

Dashboard consists of the following sections:

1. Dashbord heading - first section consists of dashbord title and region selector;

2. Summary totals - second section presents tiles showing annual number of accidents, casualties and vehicles involved;

3. Accident data analysis - third section shows split of annual accident totals by severity level,
   accident totals by road type, and accident severity by road speed limit;

4. Average daily values - fourth section presents average daily figures (accidents and casualties), as well as peak hours
   and peak hour values (accidents and casualties) on an average day;

5. Monthly and hourly profiles - last section presents monthly and hourly distribution of annual number of accidents / casualties / vehicles involved in an accident.

## Demo

Website demo is available [here](https://jbroks.github.io/GB-Accidents-Dashboard/ "GB_Accidents_Dashboard").

## UX

### UX Design

My goal in this design was to create a dashboard that would make a maximum use of the analysed dataset while striving for a minimalist design. 

The project aim was to create a dashboard with a simple and modern feel by implementing tile design where each charts is placed in a separate tile.

Color pallete also strives for simplicity implementing dark background colors, off-white fonts, and bright and colorful charts.
In most of the cases chart colors were adjusted to emphasise importance / seriousness of each category i.e. casualties / fatal accidents category was represented by red (`#e6562e`) thoughout the dashboard,
accidents /  serious accidents category was represented by orange (`#f2893c`), and vehicles involved / slight accidents category was represented by more neutral blue (`#2477b4`).

### Target Audience

This dashboard constitutes a useful analytical tool for transport planners, transport modellers and road desing engineers
in a private sector as well as planners and policy makers in a public sector. The main objective of this particular dashboard is to 
provide an insight into accident data to transport planning professionals.

This dashboard provides a user with understanding of the road safety situation in Great Britain as a whole as well as in each region separately.
The project provides an information about accidents severity, location and speed limit analysis. Dashboards provides its user with an insight into
a monthly and hourly accident profiles for the whole year as well as average daily and peak hour statistics.

### User Stories

The following user stories were used to design this data dashboard:

**User Story 1:** As a transport planner I would like to gain an understanding into accident volumes and severity in order to include this analysis into my traffic model.

**User Story 2:** As a transport planner I would like to understand distribution of incident occurence on a certain road types to include valid recommendations for road safety improvements.

**User Story 3:** As a road designer I want to understand volumes of incident occurence on a certain road type to include appropriate safety measures into my road design.

**User Story 4:** As a transport representative in a local council I would like to gain an understanding into the safety situation in my region so I can decide if any safety measures should be implemented in the future.

**User Story 5:** As a transport planner I would make a use of the accident statistics in Transport Scheme Business Case preparation, precisely in cost benefit analysis.

**User Story 6:** As a road safety auditor I would like to review the accident data to understand which road types are the most critical so I can pay extra attention to them during my audits.

**User Story 7:** As a transport researcher I would use the statistics in my thesis / paper to describe the current safety situation on British roads on both national and regional level.

**User Story 8:** As a planner / policy maker I would like to get some figures regarding accidents (without preparing all calculations myself), to include it in regional development plans to describe the current safety situation.

**User Story 9:** As a user I would like to know what was the original dataset so I can quote it in my thesis / report / analysis.

**User Story 10:** As a user I would like to be able to easily reset my selection of filters in order to anayse the data using different filters.

### Mockups & Wireframes

The following wireframe sketches were created to design the dashboard layout options:

- [Mobile display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/wireframes/Mobile-Display-Wireframe.pdf)
   
- [Medium display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/wireframes/Medium-Display-Wireframe.pdf)

- [Desktop display](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/wireframes/Desktop-Display-Wireframe.pdf)

Additionally [this](https://github.com/JBroks/GB-Accidents-Dashboard/blob/master/wireframes/Dashboard-mockup.png) mockup for a desktop display was created using **Adobe XD**.

## Features

### Existing Features

The dashboard consists of the following features:

- **Spinner** -  jQuery method `show()` and `hide()` was used to create spinner showing while data is loading;

- **Back to top button** - back to top button was implemented so user can go back to the top of the page without scrolling back. The feature is especially useful on mobile devices.

- **Navbar** - navbar contains the dashboard name;

- **Region selector** - this `dc.selectMenu` feature allows users to filter out data for a particular region of Great Britain by selecting it from the list;

- **Summary statistics number displays** - `dc.numberDisplay` feature presenting summary statistics of total annual accidents / casualties / vehicles involved figures;

- **Pie charts** - two pie charts (`dc.pieChart`) show analysis of accidents by severity level and road type. By clicking on a given slice, all dashboard results are recalculated to filter out only the chosen category.

- **Stacked bar chart** - `dc.barChart` presents percentage split of accidents by severity by road speed limit. Each bar represents data for different speed limit, and each stack represents accident severity category. By clicking on a given bar, all dashboard results are recalculated to filter out only the chosen category.

- **Average per day and peak time number displays** - `dc.numberDisplay` features used to calcualate average accidents / casualties per day, and accidents / casualties peak hour and peak value calculated for an average day;

- **Line charts** - `dc.lineChart` features presenting monthly and hourly distribution of annual accidents / casualties / vehicles involved totals;

- **Records count** - `dc.dataCount` feature presenting count of records selected from the 2017 dataset;

- **Reset all button** - feature that enables users to reset all their selection;

- **Footer** - simple footer containing link to the original **DfT** dataset and link to the data copyrights.

### Features left to implement

List of features to be implemented in the future:

- Percentage change figure added under each summary total to express a change between current and the previous year;

- Add arrows at the end of x and y axis for both line charts;

- Add available datasets for other years and add a year selector to the dashboard;

- Bootstrap `popovers` containing explanation / user instruction attached to each chart tile;

- Implement `dc.geoChoroplethChart` feature using GeoJson data to present statistics on the GB regional map.

## Technologies used

### Programming languages

- HTML - The project used **HTML** to define structure and layout of the web page;

- CSS - The project used **CSS** stylesheets to specify style of the web document elements;

- JavaScript - The project used **Javascript** to implement interactive elemets to the web document.

### Libraries
- [Crossfilter](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js) - The project used the **Crossfilter.js** library to explore the accidents dataset and create dimensions and groups for charts prepared using **DC.js**;

- [DC.js](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js) and [DC.css (2.1.8)](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css)
   - The project used **DC.js** library to set up charts from prebuilt chart types available in the DC library;
   - Together with **Crossfilter.js** library it was used to create interactive charts;

- [D3.js](https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js) - **D3.js** library was used to edit and style prebuilt charts provided by **DC.js** library;

- [Queue.js](https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js) - The project used **Queue.js** to bind external datasets (saved in the project folder) to the charts;

- [jQuery](https://code.jquery.com/jquery-3.4.1.js) - The project used `show()` and `hide()` method to display loading spinner;

- [Bootswatch](https://bootswatch.com/) - The project used **Bootswatch** "Superhero" theme for setting color pallete and card element to contain each chart;

- [Font Awesome](https://fontawesome.com/v4.7.0/) - **Font Awesome** calendar and clock icons were used for the project;

- [Google Fonts](https://fonts.google.com/) - **Google Fonts** library was used to set up font type for the document;

### Frameworks

- [Bootstrap](https://getbootstrap.com/) - The project used **Bootstrap** to create nice grid layout, and position elements within grids;

### Other

- [Gifox](https://gifox.io/) - Tool was used to record the gif presented in the demo secion of this README files;

- [Am I Responsive](http://ami.responsivedesign.is/#) - Online tool was used to display the project on various devices;

- [Adobe XD](https://www.adobe.com/ie/products/xd.html) - Software was used to create a project mockup;

- MS Excel 
    - **MS Excel** was used to aggregate the original dataset, using PivotTable tool, as it was too big to upload to the **AWS Cloud9** system;
    - Software was also used to make validation checks to calculations performed and presented on the dashboard.

## Testing

### Code validation

#### CSS

CSS code was validated using the [W3C CSS Validation Service - Jigsaw](https://jigsaw.w3.org/css-validator/).

While validating CSS code the following warrning appeared: "Imported style sheets are not checked in direct input and file upload modes". Warning was investigated and [this](https://stackoverflow.com/questions/25946111/importing-css-is-ending-up-with-an-error) Stack Overflow thread explained that it is just an information that imported style sheet will not be validated.

#### HTML

HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/).

All errors and warning were addressed except the following: "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections." The warning appears in four instances due to lack of a heading. Since each charts has a title placed in the `card-header` I decide to leave this warning as there is no need for additional section heading.

#### JavaScript

JavaScript code was validated using [JSHint](https://jshint.com/).

Validator has indicated that there are five unknown / undefined variables, namely $, queue, dc, d3, and crossfilter. The warning was ignored as I believe it is due to the fact that these libaries are separated and the validator dose not have access to them. Furthermore, **JSHint** shown the following warning: *'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).* However, after setting configuration to assume *New JavaScript features (ES6)* this warning disappeared.

### Features testing

#### Charts

Selector menu and all charts results were tested and validated against the pivot table created in **MS Excel**. The same region selection and filters as in dashboard were applied as in the pivot table and result of both were compared.

Test to check if charts are interactive was conducted as follows:

- Chart slice / bar / region was selected and all other charts results were checked to confirm that filter was applied;

- Results were compared against the **MS Excel** pivot table results;

- In case where any errors occurred, it was investigated and fixed;

Peak time charts were validated against hourly profile charts to confirm that the peak hour and value (i.e. value from the line chart divided by number of 365 days in a year) is consistent with what is shown on the line chart.

Data count was tested to confirm that with any selection number decreases. It was also tested if the initial figure is consistent with number of rows (excluding row containing column headings) in the 2017 dataset.

##### Bugs:

While creating line charts I was rendering data points but some of these points were cut off. I resolved this bug by applying `elasticX` / `elasticY` and `xAxisPadding` / `yAxisPadding`.

Another bug associated with line charts was overlapping hour tick labels. This issue was resolved by rotating them as follows:
```
chart.selectAll("g.x text")
                .style("font-size", "12px")
                .attr("dx", "-30")
                .attr("dy", "-5")
                .attr("transform", "rotate(-90)");
```

Sparkline charts were created for decoration of summary statistics cards. However when connected to 2017 dataset they were interacting with other charts. In order to disable them data from 2016 dataset was used and the following code was applied to disable `pointer-event` and click function:
```
.on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style("pointer-events", "none");
        }))
```

Initially I have tried to make the sparkline chart not to interact with other charts by using **DC.js** `chartGroup` parameter but I was unable to make it work correctly. Therefore the current solution to this bug will have to be revisited in the future if datasets for other years are added (i.e. 2016 dataset will be used).

#### Reset All

Reset all button was tested to confirm that is brings all chart results and regional selection to the default (i.e. 'All Regions' selection without filters applied).

#### Links

Source and copyrights links were tested and will open in a new tab using `target="_blank"`. All links have been manually tested to ensure that they are pointing to the correct destination.

#### Spinner

##### Bugs:

Spinner was tested and it was discovered that the overlay is only covering the extent of the viewport, so when user scrolled down dim effect was cut off. This was resolved by adjustment applied to position, i.e. `position: fixed`.

### Responsivness testing

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer) and on multiple mobile devices (iPad Mini, iPad, Sony Xperia) to ensure compatibility and responsiveness. 

Chrome developer tools were used to additionally inspect responsiveness for the following devices:

- iPad Pro / iPad / iPad Mini (portrait & landscape);

- iPhone 5/SE (portrait & landscape);

- iPhone 6/7/8 (portrait & landscape);

- iPhone 6/7/8 Plus (portrait & landscape);

- iPhone X (portrait & landscape);

- Android (Pixel 2) (portrait & landscape).

Furthermore, [Responsinator](https://www.responsinator.com/) was used to test responsiveness of the final version of the project. The website is fully responsive and working well on mobile devices.

#### Bugs:

Bugs that were noticed during the testing were fixed using **Bootstrap** classes and **CSS** styling applied to the `divs` containing charts (i.e. `max-height`, `min-height`).

Initially dashboard was not responsive on mobile devices, however I was able to find the `viewBox` solution on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) that helped me to fix that issue.

### Peer-code-review

The project was published on Code Institute Slack code-peer-review channel where other students and mentors tested the site, reviewed the code and provided a useful feedback that was then implemented.

### User stories testing

**User Story 1:**

- Solution: Dashboard provides summary of accidents, casualties and vehicles involved volumes (`dc.numberDisplay`). Dashboard also includes accident volumes analysis by a month and hour (`dc.lineChart`). Furthermore, it includes a pie chart (`dc.pieChart`) presenting accidents split by severity.

**User Story 2:** 

- Solution: Dashboard provides user with an insight into incidents split by a road type, in a form of a pie chart (`dc.pieChart`).

**User Story 3:** 

- Solution: Dashboard provides user with an insight into incidents split by a road type, in a form of a pie chart (`dc.pieChart`).

**User Story 4:** 

- Solution: Dashboard includes `dc.selectMenu` that enables user to filter out data for a particular region of Great Britain. Upon selection all charts are recalculated to present statistics for that given region.

**User Story 5:** 

- Solution: Dashboard provides a user with information about average daily, peak hour and annual total figures (`dc.numberDisplay`) which are useful in the cost benefit analysis calculations.

**User Story 6:** 

- Solution: Dashboard provides user with an insight into incidents split by a road type, in a form of a pie chart (`dc.pieChart`).

**User Story 7:** 

- Solution: Dashboard summarises accident data in a form of annual, daily average, and peak time values (`dc.numberDisplay`). Furthermore `dc.selectMenu` feature enables users to check statistics on national (all regions) and regional level.

**User Story 8:** 

- Solution: Dashboard is a great source of information about road safety situation in Great Britain. User is able to apply several different filters, as charts are interactive, and quote figures in their reports. The footer contains information about the source and a link to the original dataset.

**User Story 9:** 

- Solution: The footer contains information about the source and a link to the original dataset.

**User Story 10:**

- Solution: Reset all feature was included at the bottom of the dashboard to enable users to reset all filters at once.

## Deployment

The site was developed using AWS Cloud 9. To keep records of different version of al project files git version control system was used. 

In order to track the changes in the local repository the following steps were taken:

- command `git add` + file name - to update what will be committed;

- command `git commit` - to commit the changes.

Using `git push` command all changes from the local repository were pushed to the remote one.


This dashboard project is hosted using GitHub pages, deployed directly from the `master` branch. 

To deploy my dashboard project from GitHub I followed these steps:

1. On GitHub website I logged into my account and navigated to [my repository](https://github.com/JBroks/GB-Accidents-Dashboard);

2. Under my repository name, I clicked on **Settings** tab;

3. I scrolled down to the **GitHub Pages** section;

4. On the **Select source** drop-down menu I selected `master` as my GitHub Pages publishing source;

5. I clicked **Save**.

The deployed site will update automatically upon new commits to the `master` branch. It is important to remember that for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

In order to clone my GitHub repository to your local one you should follow these steps:

1. On GitHub navigate to [my repository](https://github.com/JBroks/GB-Accidents-Dashboard);

2. Under the repository name, click **Clone or download**;

3. In the Clone with HTTPs section, copy the clone URL for the repository;

4. Go to IDE that you are using and open terminal;

5. Change the current working directory to the location where you want the cloned directory to be made;

6. Type `git clone` and then paste the URL you copied in Step 3;

```
$ git clone https://github.com/JBroks/GB-Accidents-Dashboard.git
```

7. Lastly press **Enter** and your local repository will be created.

## Credits

### Content

Accident datasets were downloaded from the [DfT website](https://data.gov.uk/dataset/cb7ae6f0-4be6-4935-9277-47e5ce24a11f/road-safety-data).

### Media

Favicon used for the project was download from [here](https://icons8.com/icons/).

### Acknowledgements

`Viewbox` solution applied to resolve issue of responsiveness on mobile devices, solution found [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).

Calculation of pie chart slice percentage value was inspired by [this](https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html) code.

Function to disable sparkline charts was inspired by [this](https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ) code.

Solution for a chart title edit inspired by [this](https://groups.google.com/forum/#!topic/dc-js-user-group/u-zPORy4-2Y) code. 

Solution that enabled label rotation can be found in [here](https://groups.google.com/forum/#!msg/dc-js-user-group/TjXkTTbOhsQ/7WU14__RGoI).

Reset all and data count solution inspired by [this](https://codepen.io/danshultz11/pen/ZBvjGV) code.

Spinner animation found on [Codepen](https://codepen.io/judecodes/pen/PrBOvG?&page=1).

Back to top button was inspired by [this](https://codepen.io/matthewcain/pen/ZepbeR) Codepen solution.

Many thanks to my mentor **Maranatha Ilesanmi** for support and advice throughout the project.

Many thanks to Simen Daehlin mentor at Code Institute for useful comments on my project.

### Disclaimer

*This is for educational use.*