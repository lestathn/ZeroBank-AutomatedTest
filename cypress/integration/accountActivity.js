before(() => {  
    cy.clearCookies()       
    cy.visit('/')
    cy.server()
    cy.get("form");
    cy.get('button[id="signin_button"]').click();
    cy.get('input[id="user_login"]')
    .type('username');
    cy.get('input[id="user_password"]')
    .type('password');
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
  
    it('Check the Account Activity tab', () => {   
       cy.get('li[id="account_activity_tab"]').click();
       cy.get('h2[class="board-header"]')
       .contains('Show Transactions');
    })

    it('Check the Checking info', () => {   
        cy.get('select[id="aa_accountId"]')
        .select('2');
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');    
     })

     it('Check the Savings info', () => { 
        cy.get('select[id="aa_accountId"]')
        .select('1');
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');
     })

     it('Check the Loan info', () => {   
        cy.get('select[id="aa_accountId"]')
        .select('4');
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');
     })
     
     it('Check the Credit Card info', () => { 
        cy.get('select[id="aa_accountId"]')
        .select('5');
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');

     })

     it('Check the Brokerage info', () => {   
        cy.get('select[id="aa_accountId"]')
        .select('6');
        cy.get('table[class="table table-condensed table-hover"]')
        .children()
        .should('contain', 'Date')
        .should('contain', 'Description')
        .should('contain', 'Deposit')
        .should('contain', 'Withdrawal');
     })     
  
})