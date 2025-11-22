describe('Login with wrong credentials', () => {
  it('Enter invalid user login data into login form', () => {
    cy.visit('https://login.brightsg.com/login.brightsg.com/B2C_1A_BPOL_SIGNIN_PROD/oauth2/v2.0/authorize?p=B2C_1A_BPOL_SIGNIN_PROD&client_id=c41c3f57-3664-41b1-a95f-6ba8552af3b9&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fid.brightsg.com%2Flogin&scope=openid%20profile%20offline_access%20https%3A%2F%2Flogin.brightsg.com%2F456b7587-bc0e-4a1e-824e-756b078a2ade%2Fbrightpay.cloud.profile.api%20https%3A%2F%2Flogin.brightsg.com%2F456b7587-bc0e-4a1e-824e-756b078a2ade%2Fbrightpay.online.core.api&response_type=code&code_challenge=g8-AI3gRfkfLHreJrs4nFQBpi78YQOBUBLVID6E69_w&code_challenge_method=S256&response_mode=query') //Open login page
    cy.get('#signInName').type('test@test.com') //Types test@test.com into Email field
    cy.get('#password').type('test-password') //Types test-password into Password field 
    cy.get('#next').click() //Press Sign In button
    cy.contains("Your username or password is incorrect.").should('be.visible') //Error message should be visable
    })
})

//---------TEST PASSES IF THE FALSE USER DATA DOESNT GET ACCEPTED---------//