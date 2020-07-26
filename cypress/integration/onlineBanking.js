before(() => {        
    cy.visit('/')
    cy.get("form");
  
  })
  
  beforeEach(()=>{
    Cypress.Cookies.defaults({
      whitelist: 'session_id'
    })
  })
  
  describe('Check the Online Banking Tab', () => {
  
    it('Check Banner', () => {   
        cy.get('form');
        cy.get('li[id="onlineBankingMenu"]').click();
        cy.get('div[class="span6"]')
        .contains('Online Banking');
       
    })

    it('Check Online Banking Features',()=>{
        cy.get('div[id="online_banking_features"]')
        .children()
        .should('contain', ' Account Summary')
        .and('contain', 'Account Activity')
        .and('contain', 'Transfer Funds')
        .and('contain', 'Pay Bills')
        .and('contain', 'My Money Map')
        .and('contain', 'Online Statements');
    })
  
})