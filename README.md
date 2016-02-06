# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Install

1. Download the repository
2. Open index.html in a browser

## Test Environment

At the top of the page you will see the pre-made application and at the bottom of the page you will the the results of each test I made running with Jasmine.

Please note: I added a small new feature (author's name) to the application that I then wrote a test for.

## Additional Tests

I have added two additional tests in a test suite titled "Page Content" to this application (which is not required).

I noticed that in the index.html that the link is created by handlebars-template.

```html
<script class="tpl-entry" type="text/x-handlebars-template">
    <a class="entry-link" href="{{link}}">
        <article class="entry">
            <h2>{{title}}</h2>
            <h3>{{author}}</h3>
            <p>{{contentSnippet}}</p>
        </article>
    </a>
</script>
```

This led me to check how the links are actually populated on the page. So I checked out the app.js file to find that the application is using the API at https://rsstojson.udacity.com/parseFeed. I then looked at the JSON results from the AJAX call to that API and noticed that inside the JSON was the `link` which is what the handlebars-template is returning. I figured this would be a good feature to test. When the test is run it passes.

I noticed that in the JSON results each article has an author but, since this is not in the view, you can't tell who they are until after clicking on the the article. My second test is an added feature that I thought would give attribution to the awesome authors who wrote these articles. So I thought, what if I could add the authors name underneath each article? Great idea, right? So not only will the test run and pass but you can view in the application what it would look like.

Hopefully, I did not break the rules when I went a step further and actually implemented this new feature.
