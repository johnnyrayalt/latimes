# Website Clone - L.A. Times
## Description

This project is a clone of the front page of the L.A. Times website. It's intent is to recreate the front page in Angular with added 'admin' functionality of being able to click on an article and edit it. Editable fields include headline, image(s) and blurb.
http://www.latimes.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Set Up Instructions

* open terminal
* `$ git clone https://github.com/johnnyrayalt/latimes.git`
* `$ cd latimes`
* `$ npm install`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## User Specs
* The website should have a header and a footer, with three columns of content between.
* Each column contains flexible boxes of content that populate
* Each content box should have available space for an image / image carousel, Headline, blurb, time and date published, author and author photo
* The user can click on topics a list of possible topics will appear
* the user can click search to enable a search bar (actual search functionality may not be enabled)

there is one main article class object that holds the headline, imgs, blurb, and an author class object. The author class object hold the authors name, photo, and bio.
