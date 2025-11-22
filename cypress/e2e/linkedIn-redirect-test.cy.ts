import { PopupSelectors } from '../selectors/popup.selectors';

describe('Check if pressing LinkedIn icon redirects to a LinkedIn page', () => {
  it('Click LinkedIn icon which redirects to a LinkedIn page', () => {
    cy.visit('/')
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.irelandIcon, 'Ireland').click({force: true});
    
    cy.get('i.fa-linkedin').click({ force: true }); //Click on LinkedIn icon
  })
})

//---------TEST IS SUCCESFULL IS A NEW TAB IS OPENED WITH A LINKEDIN URL---------//