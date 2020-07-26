before(() => {      
    cy.visit('/');
    cy.get("form");
    cy.get('button[id="signin_button"]').click();
    cy.get('input[id="user_login"]')
    .type('username');
    cy.get('input[id="user_password"]')
    .type('password');
    cy.get('input[id="user_remember_me"]').click();
    cy.get('input[class="btn btn-primary"]').click();
    cy.get('li[id="account_summary_tab"]')
    .contains('Account Summary'); 
    
  })
    
  beforeEach(()=>{
    Cypress.Cookies.defaults({
      whitelist: 'session_id'
    })
  })

  
  describe('Account Activity tab', () => {
    it('Find Transactions', () => {
        cy.get('li[id="transfer_funds_tab"]').click();
        cy.get('select[id="tf_toAccountId"]')
        .select('2');
        cy.get('input[id="tf_amount"]')
        .type("250.00");
        cy.get('input[id="tf_description"]')
        .type("This is a transfer test");
        cy.get('button[class="btn btn-primary"]').click();     
        cy.get('div[class="board-content"]')
        .contains('Please verify that');
        cy.get('button[class="btn btn-primary"]').click();
        cy.get('div[class="alert alert-success"]')
        .contains('You successfully submitted your transaction');
     })
     
  
})