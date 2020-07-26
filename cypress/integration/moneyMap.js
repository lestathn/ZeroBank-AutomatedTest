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

   
  describe('My Money Map', () => {  

     it('Check the Money Map', () => {
         cy.get('li[id="money_map_tab"]').click();
         cy.get('div[id="report-1010_header_hd"]')
         .contains('Inflow');
         cy.get('div[id="report-1016_header_hd"]')
         .contains('OutFlow');
         cy.get('text[id="ext-sprite-1129"]')
         .contains('OutFlow Chart');

   })

  
})    
