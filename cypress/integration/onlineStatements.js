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
      whitelist: 'session_id',      
    })
    cy.setCookie('JSESSIONID', '773A5315');
    cy.setCookie('username','username');
    cy.setCookie('password','password');

  })

   
  describe('Online Statements', () => {  

     it('Check the Online Statements', () => {
         cy.get('li[id="online_statements_tab"]').click();
         cy.get('h2[class="board-header"]')
         .contains('Statements ');
         cy.get('select[id="os_accountId"]')
         .select('Checking').should('have.value', '2');
         cy.wait(1000);
         cy.get('h2[class="board-header"]')
         .contains('Account - Checking');
         cy.get('a[href="#os_2010"]').click();
         cy.get('a[href="/bank/online-statements-by-name.html?name=8534567-04-09-10.pdf"]').click();

     

   })

  
})    
