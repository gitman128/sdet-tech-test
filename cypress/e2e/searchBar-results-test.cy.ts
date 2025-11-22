import { PopupSelectors } from '../selectors/popup.selectors';

describe('Searchbar returns valid results', () => {
  it('Kolkata is entered to a searchbar to ensure only valid results are returned', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true});
    
    cy.get('a[href="#searchbox"]:visible').click()  //Open the searchbox
    cy.get('input[name="s"]',).type('kolkata{enter}') //In the searbox field, enter kolkata
    cy.contains("3 results found").should('be.visible') //3 Results must be returned
  });
})

//---------TEST PASSES IF THE STRING "KOLKATA" returns 3 results---------//