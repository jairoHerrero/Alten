module.exports = {
    'Alten search test': function (browser) {
        let search = browser.page.search();

        search.navigate()
            .waitForElementVisible('@acceptCookies', 3000)
            .click('@acceptCookies')
            .assert.visible('@searchButton')
            .click('@searchButton')
            .setValue('@searchInput', 'conocenos')
            .assert.visible('@searchPanel')
            .assert.visible('@resultSearch')
            .assert.visible('@resultButton')
            .saveScreenshot('./screenshots/searchResult.png')
            .click('@resultButton')
            .waitForElementVisible('@resultSearch', 3000)
            .click('@resultSearch')
            .assert.urlEquals('https://www.alten.es/conocenos/')
            .saveScreenshot('./screenshots/search.png')
    },
    'Alten contact test': function (browser) {
        let contact = browser.page.contact();

        contact.navigate()
            .assert.visible('@lastName')
            .setValue('@lastName', 'Test lastName')
            .assert.visible('@firstName')
            .setValue('@firstName', 'Test Name')
            .assert.visible('@companyName')
            .setValue('@companyName', 'TestCompany')
            .assert.visible('@email')
            .setValue('@email', 'testmail@test.com')
            .assert.visible('@phone')
            .setValue('@phone', '600123123')
            .assert.visible('@message')
            .setValue('@message', 'Test Message')
            .assert.visible('@category')
            .click('@category')
            .assert.visible('@categoryItem')
            .click('@categoryItem')
            .saveScreenshot('./screenshots/contact.png')
            .click('@checkbox')
            .moveToElement('@submitButton', 0, 0)
            browser.mouseButtonClick(0)

    }
}