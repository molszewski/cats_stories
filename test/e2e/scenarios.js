'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('cats stroies', function() {

  browser.get('index.html');

  it('should automatically redirect to /stories when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/stories");
  });


  describe('stories', function() {

    beforeEach(function() {
      browser.get('index.html#/stories');
    });


    it('should render stories view when user navigates to /stories', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Stories So Far/);
    });
    
    it('should render stories view with "Nina In Hiding" story when user navigates to /stories', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Nina in hiding/);
    });

  });


});
