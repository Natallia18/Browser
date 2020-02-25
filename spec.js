    describe('Protractor Demo App', function() {
    it('init', function() {
       browser.waitForAngularEnabled(false)
        browser.get('https://www.bbc.com/');
        element(by.css('#orb-search-q')).sendKeys("Trump");
        element(by.id('orb-search-button')).click();
        element.all(by.css('.search-results a')).get(1).click()

    });

    it('init', function() {
        expect(element(by.id('orb-search-q')).isDisplayed()).toBeTruthy();
        expect(element(by.id('orb-search-q')).isEnabled()).toBeTruthy();

    })
    });
