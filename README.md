# react-newsfeed
News feed demo in ReactJS for a GTWebDev presentation on ReactJS.

Design derived from regular HTML and CSS from [here](http://plnkr.co/edit/3LBtpcN5ygXGQBhhP7b1?p=preview).

## Instructions

1. Run `git clone https://github.com/gt-webdev/react-newsfeed.git` in your Terminal.
2. `cd` into the directory.
3. Run `python -m SimpleHTTPServer` and navigate to `http://localhost:8000/index.html` in your browser.

Step 3 is necessary since we are using the in-browser JSX transform ([see here](https://facebook.github.io/react/docs/tooling-integration.html)), and the JSX transformer tries to load the source using AJAX. More details [here](http://stackoverflow.com/questions/20904098/react-js-example-in-tutorial-not-working).