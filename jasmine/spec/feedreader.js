/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has a URL defined and the URL is not empty', function() {
      //here is the loop where we set each object of the array to the var index
      allFeeds.forEach(function(index) {
        expect(index.url).toBeDefined();
        expect(index.url.length).not.toBe('');
      });
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name defined and the name is not empty', function() {
      //here is the loop where we set each object of the array to the var index
      allFeeds.forEach(function(index) {
        expect(index.name).toBeDefined();
        expect(index.name.length).not.toBe(0);
      });
    });
  });


  /* Test Suite for the menu toggle button */
  describe('The Menu', function() {

    /* This test ensures that the menu element is
     * hidden by default.
     * By grabbing the class we can test to see
     * that it is equalled to (true)
     */
    it('should be hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* This test ensures the menu changes
     * visibility when the menu icon is clicked.
     * We have two expectations when clicked the menu
     * should display and when clicked again it hides
     * the slide out menu.
     */
    it('should slide right on click', function() {
      //menuIcon is bound to the DOM element .menu-icon-link
      var menuIcon = $('.menu-icon-link');

      //now lets click that icon
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      //now lets slide the menu back to default position
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  /*  Test suite that test the "Initial Entries" */
  describe('Initial Entries', function() {

    //beforeEach loads asynchronous loadFeed();
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    //This test makes sure we are getting at least one entry in the feed
    it('should be called and contain at least one feed', function() {
      expect($('article').hasClass('entry')).toBe(true);
    });
  });

  /* Test suite that test the "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    //beforeEach loads asynchronous loadFeed();
    beforeEach(function(done) {
      loadFeed(0, function() {
        //content will grab the first article entry
        content = $('article').html();
        done();
      });
    });

    //this will test that infact we get different entries
    it('should change content on page', function(done) {
      loadFeed(2, function() {
        contentTwo = $('article').html();
        expect(content).not.toEqual(contentTwo);
        done();
      });
    });
  });

  /* Test suite that test the "Page Content" */
  describe('Page Content', function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    //let's make sure we get back the link for each article
    it('should return a link to the article', function() {
      expect($('a.entry-link').attr('href').length).not.toBe(0);
    });

    //let's return one of those awesome authors on the page now!
    it('should put author name as <h3> below each article title', function() {
      expect($('article').find('h3').first().text()).not.toBe('');
    });
  });
}());
