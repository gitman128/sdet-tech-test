describe('Test if support form validation is present', () => {
  it('Leaves out subject field empty, will cause an error not allowing to submit the form', () => {
    cy.visit('https://brightsg.com/support/')
    cy.get('#input_9').type('Joe Bloggs') //Type name into Name field
    cy.get('#input_4').type('test@test.com') //Type email into Email field
    cy.get('#input_6').type('') //Empty field for the subject field
    cy.get('#recaptcha-container').should('exist') //Can't press captha, check if it exists
    cy.get('#input_2').click() //Press Submit button
    cy.contains("This field is required.").should('be.visible') //Error message should be visable
  })
})

//---------TEST FAILS DUE TO CYPRESS NOT BEING ABLE TO GET THRU THE ABOVE URL's CLOUDFLARE BOT CHECK!---------//