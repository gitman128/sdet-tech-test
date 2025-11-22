describe('Website load time test', () => {
  it('Check if the page loads > than 3 seconds', () => {
    cy.visit("https://brightsg.com/en-ie/webinar/"); //Open webinar page
    cy.window().then((win) => {
      const timing = win.performance.timing; //Timer start
      const loadTime = timing.loadEventEnd - timing.navigationStart; //Calculate loading time
      cy.log(`Page load time: ${loadTime} ms`); //Print load time
      expect(loadTime).to.be.lessThan(3000); //If load time more than 3000 ms, test fails
    });
  });
});

//---------TEST FAILS IF LOAD TIME < 3000 ms/3 seconds---------//