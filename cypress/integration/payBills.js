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

  
  describe('Pay Bills', () => {
    it('Pay Saved Payee', () => {
        cy.get('li[id="pay_bills_tab"]').click();   
        cy.get('select[id="sp_payee"]')
        .select('bofa').should('have.value', 'bofa');
        cy.get('select[id="sp_account"]')
        .select('Loan').should('have.value', '4');
        cy.get('input[id="sp_amount"]')
        .type('300');
        cy.get('input[id="sp_date"]')
        .type('2012-09-06{enter}');
        cy.get('input[id="sp_description"]')
        .type('This is a test');
        cy.get('input[class="btn btn-primary"]').click();
        cy.get('div[id="alert_content"]')
        .contains('The payment was successfully submitted.');
      })

     it('Add new Payee', () => {
      cy.get('a[href="#ui-tabs-2"]').click();
      cy.get('input[id="np_new_payee_name"]')
      .type('Payee Test');
      cy.get('textarea[id="np_new_payee_address"]')
      .type('Payee address Test');
      cy.get('input[id="np_new_payee_account"]')
      .type('2000355788');
      cy.get('input[id="np_new_payee_details"]')
      .type('Payee details test');
      cy.get('#add_new_payee').click();
      cy.get('div[id="alert_content"]')
      .contains('The new payee');

   })

   it('Purchase Foreign Currency', () => {
    cy.get('a[href="#ui-tabs-3"]').click();
    cy.get('select[id="pc_currency"]')
    .select('EUR');
    cy.get('span[id="sp_sell_rate"]')
    .contains('euro');
    cy.get('input[id="pc_amount"]')
    .type('150');
    cy.get('input[id="pc_inDollars_true"]').click();
    cy.get('input[id="pc_calculate_costs"]').click();
    cy.get('label[id="pc_conversion_amount"]')
    .contains('euro (EUR)');
    cy.get('#purchase_cash').click();
    cy.get('div[id="alert_content"]')
      .contains('Foreign currency cash');

    })
})    
