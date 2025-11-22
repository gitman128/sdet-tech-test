import { PopupSelectors } from '../selectors/popup.selectors';

describe('Search Bar input stress test', () => {
  it('Uncommon data fed to a search bar ensuring its safe from attacks', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
    cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({ force: true });

    const inputs = [ //Defined inputs that will be fed into the searchBar
      "' OR '1'='1", //SQL attack Test
      "<script>alert('x')</script>", //XSS test
      "DROP TABLE test", //SQL Test
      "ABCDEFG".repeat(250) //Overly long string 
    ];

    inputs.forEach((input) => { //Loop to enter data from the inputs variable
      cy.get('a[href="#searchbox"]:visible').first().click(); //Reopen search box each time
      cy.get('input[name="s"]:visible').first().clear().type(input, { force: true }).type('{enter}'); //Enter testInput into the searchbar
      cy.get('body').should('exist'); //Check if body still exists
    });
  });
});

//---------TEST PASSES IF THE WEBSITE IS STILL UP AFTER FORCING THE ABOVE SPECIFIED TEXT INTO THE SEARCHBAR---------//