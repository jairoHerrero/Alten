module.exports = {
    url: 'https://www.alten.es/#contacta',
    elements: {
        submitButton: {
            selector: '#site-content > div.post_content > div.alten2018_country-offices > div.container.offices-content > div.contact.fadeIn > div > div > form > div.form-btn.fadeIn > button'
        },
        lastName: {
            selector: '#last_name'
        },
        firstName: {
            selector: '#first_name'
        },
        companyName: {
            selector: '#company_name'
        },
        email: {
            selector: '#email'
        },
        phone: {
            selector: '#phone'
        },
        category: {
            selector: '#site-content > div.post_content > div.alten2018_country-offices > div.container.offices-content > div.contact.fadeIn > div > div > form > div.form-line.fadeIn > div:nth-child(1) > div:nth-child(5) > div'
        },
        categoryItem: {
            selector: '#site-content > div.post_content > div.alten2018_country-offices > div.container.offices-content > div.contact.fadeIn > div > div > form > div.form-line.fadeIn > div:nth-child(1) > div:nth-child(5) > div > div > a:nth-child(2)'
        },
        message: {
            selector: '#message'
        },
        checkbox: {
            selector: '#site-content > div.post_content > div.alten2018_country-offices > div.container.offices-content > div.contact.fadeIn > div > div > form > div.form-field.center.fadeIn > div > label > span'
        }
    }
}