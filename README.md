## Mirum Assessment

`npm install` to install dependencies  
`npm start` to run

### Version 2 Changes

- Separated out info for the slides in separate component for modularity.
- Refactored carousel. The carousel can be seen from any size screen. How it works is that the first slide is the main and active slide. The arrows and dots both act as navigation, which will change the active slide depending on click. When the last data item is at the beginning, it will return to the first slide if you try to keep going. I realize the carousel can be made in a lot of different ways. I chose to focus on active first slide, considering the dots tell you which slide you are on. 
- Clicking on the slide image will now take you to the corresponding large image in the detail page using url hashes to pass along which slide should be shown on load. 
- More media queries for detail page gallery small images. 
- Color palette changes to fit the theme better. 

Enjoy!