before(() => {        
    cy.visit('/')
    cy.get("form");
  
  })
  
  beforeEach(()=>{
    Cypress.Cookies.defaults({
      whitelist: 'session_id'
    })
  })
  
  describe('Signin', () => {
  
    it('Signin', () => {   
        cy.get('button[id="signin_button"]').click();
        cy.get('input[id="user_login"]')
        .type('username');
        cy.get('input[id="user_password"]')
        .type('password');
        cy.get('input[class="btn btn-primary"]').click();
        cy.get('li[id="account_summary_tab"]')
        .contains('Account Summary');
       
    })
  
})