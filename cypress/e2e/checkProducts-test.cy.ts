import { PopupSelectors } from '../selectors/popup.selectors';

describe('Check product list', () => {
  it('Checks if all of the products are on the products page', () => {
    cy.visit('/') 
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.irelandIcon, 'Ireland').click({force: true});
    
    cy.get('#menu-item-2306').click(); //Press the products button
    cy.contains('BrightPay').should('exist'); //Check if BrightPay exists on page
    cy.contains('BrightManager').should('exist'); //Check if BrightManager exists on page
    cy.contains('BrightAccountsProduction').should('exist'); //Check if BrightAccountsProduction exists on page
    cy.contains('BrightBooks').should('exist'); //Check if BrightBooks exits on page
    cy.contains('BrightPropose').should('exist'); //Check if BrightPropose exits on page
    cy.contains('BrightExpenses').should('exist'); //Check if BrightExpenses exits on page
    cy.contains('Dext Prepare').should('exist'); //Check if Dext Prepare exits on page
    })
})

//---------TEST PASSES IF ALL THE ABOVE ELEMENTS ARE PRESENT WITHIN THE PAGE---------//