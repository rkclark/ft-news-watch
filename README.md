# Financial Times News Watch

A web application that queries the [Financial Times Headline API](https://developer.ft.com/docs/license_quick_start/headlinelicense) for articles. By default, it displays the 100 most recent articles from the [FT](https://www.ft.com/?edition=uk). Alternatively, the user can search to return articles relating to a given topic.

[Click here to see the demo on Heroku :)](https://rkclark-ft-news-watch.herokuapp.com/)

### Installation

- [Register for a FT API Key](https://developer.ft.com/)
- Clone this repo
- In project root directory, run `npm install`
- In the project root, create a `.env` file with the following content:
```
FT_API_KEY=[Your FT API Key]
DOMAIN=localhost:3000
```
- To run the local server, run `npm start`
- Navigate to `http://localhost:3000/` to use the app

**To Run the Tests**

- Ensure Java Runtime Environment is installed to allow Selenium server to operate
- Ensure the local server is running (`npm start`)
- Run `npm test` on a separate terminal window


**Development**

To build the `bundle.js` and `bundle.css`, run `gulp`.

To build dist files run `gulp create:dist`. This is run automatically when the app is deployed to Heroku.

### Specification

The app is built to the following specification:

**User Stories**

```
As a user,
I want to be able to see a list of the latest news headlines from the FT,
So that I can keep up to date with the current news

Acceptance Criteria:
- Display via pagination with 20 results per page
- Mirror look and feel of FT.com
```

```
As a user,
I want to be able to search for headlines containing specific words,
So that I can find related news articles
```

**Technical Requirements**

The app must be:
- Server rendered
- Progressively enhanced
- Responsive
- Accessible

### Technologies and Approach

The app is built with:

- Node
- Express
- The FT's [Origami framework](http://origami.ft.com/) and build tools
- Handlebars
- Gulp
- Sass

Server side code is written in Javascript ES6 and transpiled using Babel.

**Performance and Accessbility**

To maximise the site's performance and accessibility the following steps have been taken:
- All content is server rendered.
- The client is capable of running with Javascript disabled.
- Browsers not meeting the FT's 'Cuts the Mustard' standard are served a core version of the Origami components. Modern browsers receive the full enhanced experience.
- Bundled Javascript and CSS files are minified.
- Static files are subject to browser caching (for 8 days).
- API responses from the FT Headline API are cached on the News Watch server for 5 minutes.

As a result, the site receives the following scores from [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/):

**Mobile 91/100**

![Mobile 91/100](http://i.imgur.com/moKuX1R.png)

**Desktop 97/100**

![Desktop 97/100](http://i.imgur.com/vpoHC4u.png)

### Screenshots

**Homepage - Mobile**

![Homepage mobile](http://i.imgur.com/0XVYeYg.png)

**Pagination - Mobile**

![Pagination mobile](http://i.imgur.com/mxWs1NI.png)

**User Search - Mobile**

![User search mobile](http://i.imgur.com/5iAUkvq.png)

**Medium Screen Layout**

![Medium screen layout](http://i.imgur.com/ctKrGJe.png)

**Large Screen Layout**

![Large screen layout](http://i.imgur.com/wiKsMcV.png)
