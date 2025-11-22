import { PopupSelectors } from '../selectors/popup.selectors';
import 'cypress-axe' //Import axe

describe('Homepage Accesability test', () => {
  it('Injected Cypress Axe runs the accesability test', () => {
    cy.visit('/')
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.irelandIcon, 'Ireland').click({force: true});

    cy.injectAxe(); //Injects axe into the site
    cy.checkA11y() //Evaluates accesability
  })
})

//---------TEST FAILS IF AXE FINDS ANY ACCESABILITY ISSUES ON THE PAGE---------//