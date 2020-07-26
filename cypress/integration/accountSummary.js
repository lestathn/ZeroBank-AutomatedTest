before(() => {        
    
  
  })
  
  beforeEach(()=>{
    cy.visit('/')
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
  
  describe('Account Summary', () => {
  
    it('Check Account Summary tab', () => {   
        cy.get('li[id="account_summary_tab"]')
        .contains('Account Summary');
        cy.get('div[class="span12"]')
        .children()
        .should('contain', 'Cash Accounts')
        .should('contain', 'Investment Accounts')
        .should('contain', 'Credit Accounts')
        .should('contain', 'Loan Accounts');
        
    })

    it('Check saving', () => {
        cy.get('a[href="/bank/account-activity.html?accountId=1"]').click();
        cy.get('h2[class="board-header"]')
        .contains('Show Transactions');   
        cy.get('select[id="aa_accountId"]')
        .should('contain', 'Savings');
    })

    
    it('Check Brokerage', () => {
        cy.get('a[href="/bank/account-activity.html?accountId=6"]').click();
        cy.get('h2[class="board-header"]')
        .contains('Show Transactions');   
        cy.get('select[id="aa_accountId"]')
        .should('contain', 'Brokerage');    
    })

    it('Check Checking', () => {
        cy.get('a[href="/bank/account-activity.html?accountId=2"]').click();
        cy.get('h2[class="board-header"]')
        .contains('Show Transactions');   
        cy.get('select[id="aa_accountId"]')
        .should('contain', 'Checking');    
    })

    it('Check Credit Card', () => {
        cy.get('a[href="/bank/account-activity.html?accountId=5"]').click();
        cy.get('h2[class="board-header"]')
        .contains('Show Transactions');   
        cy.get('select[id="aa_accountId"]')
        .should('contain', 'Credit Card');    
    })

    it('Check Loan', () => {
        cy.get('a[href="/bank/account-activity.html?accountId=4"]').click();
        cy.get('h2[class="board-header"]')
        .contains('Show Transactions');   
        cy.get('select[id="aa_accountId"]')
        .should('contain', 'Loan');    
    })
  
})