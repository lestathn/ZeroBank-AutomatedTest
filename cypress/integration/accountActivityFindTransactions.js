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
    cy.setCookie('JSESSIONID', '773A5315');
    cy.setCookie('username','username');
    cy.setCookie('password','password');
  })

  
  describe('Account Activity tab', () => {
    it('Find Transactions', () => { 

        cy.get('li[id="account_activity_tab"]').click()
        cy.get('a[href="#ui-tabs-2"]').click();
                
        cy.get('form');
        cy.get('h2[class="board-header"]')
        .contains('Find Transactions');
        cy.get('input[id="aa_description"]')
        .type('ONLINE');

        cy.get('button[class="btn btn-primary"]').click();  
        cy.wait(1000);                   ;
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');


     })
     
  
})